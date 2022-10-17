import { useDispatch, useSelector } from 'react-redux';
import * as contactActions from 'redux/contacts/actions';
import { useEffect } from 'react';

import {
  addContact,
  deleteContact,
  fetchContacts,
} from 'redux/contacts/operations';
import { Contacts } from '../components/ContactsList';
import { Filter } from '../components/Filter';
import { PhoneBookForm } from '../components/PhonebookForm';

export default function ContactsPage() {
  const contactState = useSelector(state => state.contacts.items);
  const contactFilter = useSelector(state => state.contacts.filter);

  const dispatch = useDispatch();

  const isLoading = useSelector(state => state.contacts.loading);
  const isError = useSelector(state => state.contacts.error);

  const filterContacts = useSelector(state =>
    contactState.filter(contact =>
      contact.name.toLowerCase().includes(contactFilter.toLowerCase())
    )
  );
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleChange = e => {
    dispatch(contactActions.addFilter(e.target.value));
  };

  const contactSubmit = values => {
    const nameArray = contactState.map(contact => {
      return contact.name;
    });
    if (nameArray.includes(values.name)) {
      return alert(`${values.name} is already in contacts.`);
    }
    return dispatch(addContact(values));
  };

  const toDelete = id =>
    dispatch(deleteContact(id)) && dispatch(fetchContacts());

  return (
    <div>
      <h2>Phonebook</h2>
      <PhoneBookForm onSubmit={contactSubmit} />
      <h2>Contacts</h2>
      <Filter value={contactFilter} onChange={handleChange} />
      {isLoading && <p>Loading...</p>}

      <Contacts contacts={filterContacts} toDelete={toDelete} />

      {isError && <p>error.message</p>}
    </div>
  );
}

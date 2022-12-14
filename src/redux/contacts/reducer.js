import { combineReducers, createReducer } from '@reduxjs/toolkit';

import {
  fetchContacts,
  addContact,
  deleteContact,
} from 'redux/contacts/operations';
import { addFilter } from './actions';

const items = createReducer([], {
  [fetchContacts.fulfilled]: (_, { payload }) => {
    return payload;
  },
  [addContact.fulfilled]: (state, { payload }) => [payload, ...state],
  [deleteContact.fulfilled]: (state, { payload }) => {
    const index = state.findIndex(({ id }) => id === payload);
    state.splice(index, 1);
    //  state.filter(({ id }) => id !== index));
  },
});

const loading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,

  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,

  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchContacts.rejected]: (_, { payload }) => payload,
  [fetchContacts.pending]: () => null,
  [addContact.rejected]: (_, { payload }) => payload,
  [deleteContact.rejected]: (_, { payload }) => payload,
});

const filter = createReducer('', {
  [addFilter]: (_, { payload }) => payload,
});

export const reducers = combineReducers({
  items,
  loading,
  error,
  filter,
});

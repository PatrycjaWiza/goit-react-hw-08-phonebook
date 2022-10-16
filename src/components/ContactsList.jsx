import PropTypes from 'prop-types';

import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

export const Contacts = ({ contacts, toDelete }) => {
  return (
    <ListGroup>
      {contacts.map(({ name, phone, id }) => (
        <ListGroup.Item key={id}>
          {name}: {phone}
          <Button
            size="sm"
            type="submit"
            onClick={() => {
              toDelete(id);
            }}
          >
            Delete
          </Button>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

Contacts.propTypes = {
  filterByName: PropTypes.func,
  toDelete: PropTypes.func,
};

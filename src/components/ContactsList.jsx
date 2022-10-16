import PropTypes from 'prop-types';

import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

export const Contacts = ({ contacts, toDelete }) => {
  return (
    <ListGroup>
      {contacts.map(({ name, number, id }) => (
        <ListGroup.Item key={id}>
          <Button
            className="deleteBtn"
            size="sm"
            type="submit"
            onClick={() => {
              toDelete(id);
            }}
          >
            Delete
          </Button>
          {name}: {number}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

Contacts.propTypes = {
  filterByName: PropTypes.func,
  toDelete: PropTypes.func,
};

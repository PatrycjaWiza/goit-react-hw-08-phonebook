import PropTypes from 'prop-types';

import Form from 'react-bootstrap/Form';

export const Filter = ({ onChange, value }) => {
  return (
    <div className="findContact">
      <Form.Label>Find contacts by name</Form.Label>
      <Form.Control
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
      ></Form.Control>
    </div>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
};

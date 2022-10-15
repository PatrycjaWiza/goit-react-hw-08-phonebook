import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { selectIsLoggedIn } from 'redux/auth/selectors';

import UserMenu from './UserMenu';

const Navigation = ({ isLoggedIn }) => {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
      </nav>

      {isLoggedIn ? (
        <UserMenu />
      ) : (
        <>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/register">Register</NavLink>
        </>
      )}
    </>
  );
};

const mapStateToProps = state => ({
  isLoggedIn: selectIsLoggedIn(state),
});

export default connect(mapStateToProps, null)(Navigation);

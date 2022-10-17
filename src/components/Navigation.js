import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { selectIsLoggedIn } from 'redux/auth/selectors';

import { UserMenu } from './UserMenu/UserMenu';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <header>
        <NavLink className="StyleLink" to="/">
          Home
        </NavLink>
        {isLoggedIn && (
          <NavLink className="StyleLink" to="/contacts">
            Contacts
          </NavLink>
        )}
      </header>

      {isLoggedIn ? (
        <UserMenu />
      ) : (
        <div className="LoginRegisterBar">
          <NavLink className="StyleLink" to="/login">
            Login
          </NavLink>
          <NavLink className="StyleLink" to="/register">
            Register
          </NavLink>
        </div>
      )}
    </>
  );
};

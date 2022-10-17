import { useDispatch, useSelector } from 'react-redux';

import Button from 'react-bootstrap/Button';

import { logout } from 'redux/auth/operations';
import { selectUserName } from 'redux/auth/selectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const getUserName = useSelector(selectUserName);

  return (
    <div className="userMenuHeader">
      <p>Welcome, {getUserName}</p>
      <Button size="sm" type="button" onClick={() => dispatch(logout())}>
        Logout
      </Button>
    </div>
  );
};

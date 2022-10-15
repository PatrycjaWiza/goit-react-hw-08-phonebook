import { connect } from 'react-redux';

import { logout } from 'redux/auth/operations';
import { selectUserEmail } from 'redux/auth/selectors';

const UserMenu = ({ email, onLogout }) => (
  <>
    <p>Welcome, {email}</p>
    <button type="button" onClick={onLogout}>
      Logout
    </button>
  </>
);

const mapStateToProps = state => ({
  email: selectUserEmail(state),
});
const mapDispatchToProps = {
  onLogout: logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);

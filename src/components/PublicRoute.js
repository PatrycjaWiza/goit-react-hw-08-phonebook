import { connect } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectors';

const PublicRoute = ({
  component: Component,
  isLoggedIn,
  redirectTo,
  ...routeProps
}) => (
  <Outlet
    {...routeProps}
    render={prop =>
      isLoggedIn && routeProps.restricted ? (
        <Navigate to={redirectTo} />
      ) : (
        <Component {...prop} />
      )
    }
  />
);

const mapStateToProps = state => ({
  isLoggedIn: selectIsLoggedIn(state),
});

export default connect(mapStateToProps)(PublicRoute);

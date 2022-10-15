import { connect } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectors';

const PrivateRoute = ({
  component: Component,
  isLoggedIn,
  redirectTo,
  ...routeProps
}) => (
  <Outlet
    {...routeProps}
    render={prop =>
      isLoggedIn ? <Component {...prop} /> : <Navigate to={redirectTo} />
    }
  />
);

// const { isLoggedIn, isRefreshing } = useAuth();
// const shouldRedirect = !isLoggedIn && !isRefreshing;
// return shouldRedirect ? <Navigate to={redirectTo} /> : Component;

const mapStateToProps = state => ({
  isLoggedIn: selectIsLoggedIn(state),
});

export default connect(mapStateToProps)(PrivateRoute);

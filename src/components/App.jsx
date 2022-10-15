import { lazy, Suspense, useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { refreshUser } from 'redux/auth/operations';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Navigation from './Navigation';

const HomePage = lazy(() => import('../pages/Home'));
const LoginPage = lazy(() => import('../pages/Login'));
const RegisterPage = lazy(() => import('../pages/Register'));
const ContactPage = lazy(() => import('../pages/Contacts'));

const App = ({ refreshUser }) => {
  useEffect(() => {
    refreshUser();
  }, [refreshUser]);

  return (
    <>
      <Navigation />
      <Suspense fallback={null}>
        <Routes>
          <Route element={<PublicRoute />} path="/" component={HomePage}>
            <Route path="/" element={<HomePage />} />
          </Route>
          <Route
            element={<PublicRoute />}
            path="/login"
            component={LoginPage}
            restricted
            redirectTo="/contacts"
          >
            <Route
              path="/login"
              element={<LoginPage />}
              redirectTo="/contacts"
            />
          </Route>

          <Route
            element={<PublicRoute />}
            path="/register"
            component={RegisterPage}
            restricted
            redirectTo="/contacts"
          >
            <Route
              path="/register"
              element={<RegisterPage />}
              redirectTo="/contacts"
            />
          </Route>

          <Route
            element={<PrivateRoute />}
            path="/contacts"
            component={ContactPage}
            redirectTo="/login"
          >
            <Route
              path="/contacts"
              element={<ContactPage />}
              redirectTo="/login"
            />
          </Route>

          <Route element={<PublicRoute />} component={HomePage}>
            <Route element={<HomePage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

const mapDispatchToProps = {
  refreshUser: refreshUser,
};

export default connect(null, mapDispatchToProps)(App);

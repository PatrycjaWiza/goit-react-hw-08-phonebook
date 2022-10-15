import { createReducer, combineReducers } from '@reduxjs/toolkit';

import {
  getUserError,
  getUserSuccess,
  loginError,
  loginSuccess,
  logoutError,
  logoutSuccess,
  registerError,
  registerSuccess,
} from './actions';

const initialUserState = {
  name: null,
  email: null,
};

const user = createReducer(initialUserState, {
  [registerSuccess]: (_, { payload }) => payload.user,
  [loginSuccess]: (_, { payload }) => payload.user,
  [logoutSuccess]: () => initialUserState,
  [getUserSuccess]: (_, { payload }) => payload,
});

const token = createReducer(null, {
  [registerSuccess]: (_, { payload }) => payload.token,
  [loginSuccess]: (_, { payload }) => payload.token,
  [logoutSuccess]: () => null,
});

const isLoggedIn = createReducer(false, {
  [registerSuccess]: () => true,
  [loginSuccess]: () => true,
  [getUserSuccess]: () => true,

  [registerError]: () => false,
  [loginError]: () => false,
  [getUserError]: () => false,

  [logoutSuccess]: () => false,
});

const error = createReducer(null, {
  [registerError]: (_, { payload }) => payload,
  [loginError]: (_, { payload }) => payload,
  [logoutError]: (_, { payload }) => payload,
  [getUserError]: (_, { payload }) => payload,
});

export const authReducer = combineReducers({
  user,
  token,
  isLoggedIn,
  error,
});

// const authSlice = createReducer({
//   name: 'auth',
//   initialState: {
//     user: { name: null, email: null },
//     token: null,
//     isLoggedIn: false,
//     isRefreshing: false,
//   },
//   extraReducers: {
//     [register.fulfilled](state, { payload: { user, token } }) {
//       state = { ...state, user, token, isLoggedIn: true };
//     },
//     [login.fulfilled](state, { payload: { user, token } }) {
//       state = { ...state, user, token, isLoggedIn: true };
//     },
//     [logout.fulfilled](state) {
//       state.user = { name: null, email: null };
//       state.token = null;
//       state.isLoggedIn = false;
//     },
//     [refreshUser.pending](state) {
//       state.isRefreshing = true;
//     },
//     [refreshUser.fulfilled](state, { payload: { user } }) {
//       state = { ...state, user, isLoggedIn: true, isRefreshing: false };
//     },
//     [refreshUser.rejected](state) {
//       state.isRefreshing = false;
//     },
//   },
// });
// export const authReducer = authSlice.reducer;

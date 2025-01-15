// src/context/AuthContext.js
import React, { createContext, useReducer } from 'react';

/** 1) Check if there's a user in localStorage on startup */
const userFromStorage = localStorage.getItem('user')
  ? JSON.parse(localStorage.getItem('user'))
  : null;

/** 2) Initial state */
const initialState = {
  user: userFromStorage,
  loading: false,
  error: null,
};

/** 3) Create the context with a default value */
export const AuthContext = createContext({
  ...initialState,
  dispatch: () => {},
});

/** 4) Reducer function */
function AuthReducer(state, action) {
  switch (action.type) {
    case 'LOGIN_START':
      return { user: null, loading: true, error: null };

    case 'LOGIN_SUCCESS':
      localStorage.setItem('user', JSON.stringify(action.payload));
      return { user: action.payload, loading: false, error: null };

    case 'LOGIN_FAILURE':
      return { user: null, loading: false, error: action.payload };

    case 'LOGOUT':
      localStorage.removeItem('user');
      return { user: null, loading: false, error: null };

    default:
      return state;
  }
}

/** 5) Context provider */
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

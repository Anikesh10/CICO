import React from 'react';
import GlobalProvider from './Provider';
// this is the equivalent to the createStore method of Redux
// https://redux.js.org/api/createstore

const GlobalContext = React.createContext({
  profile: {},
  setProfile: () => {},
  isLoading: false,
  setLoading: () => {},
  error: {
    flag: false,
    message: '',
  },
  setError: () => {},
});

export default GlobalContext;
export {GlobalProvider};

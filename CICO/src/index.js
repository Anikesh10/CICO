import React from 'react';
import Routes from './routes';
import {ThemeProvider} from 'styled-components/native';
import {GlobalProvider} from './context/GlobalContext';
import theme from './theme';

const AllProvider = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalProvider>
        <Routes />
      </GlobalProvider>
    </ThemeProvider>
  );
};

export default AllProvider;

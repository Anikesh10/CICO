import React from 'react';
import Routes from './routes';
import {ThemeProvider} from 'styled-components/native';
import theme from './theme';

const AllProvider = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
};

export default AllProvider;

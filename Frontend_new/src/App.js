import 'react-perfect-scrollbar/dist/css/styles.css';
import React from 'react';

import { ThemeProvider } from '@material-ui/core';
import GlobalStyles from 'src/components/GlobalStyles';
import 'src/mixins/chartjs';
import theme from 'src/theme';
import routes from 'src/routes';

const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

    </ThemeProvider>
  );
};

export default App;

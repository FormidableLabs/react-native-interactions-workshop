import React from 'react';
import { ThemeProvider } from 'styled-components/native';

import Home from './src/views/Home';
import * as theme from './src/theme';

export default () => (
  <ThemeProvider theme={theme}>
    <Home />
  </ThemeProvider>
);

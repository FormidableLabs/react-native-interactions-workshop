import React from 'react';
import { ThemeProvider } from 'styled-components/native';

import Navigator from './src/views/Navigator';
import * as theme from './src/theme';

export default () => (
  <ThemeProvider theme={theme}>
    <Navigator />
  </ThemeProvider>
);

console.ignoredYellowBox = [
  'Warning: Failed prop type: Invalid prop `onHandlerStateChange`'
];

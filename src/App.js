import React, { useState } from 'react';
import { CssBaseline, ThemeProvider } from '@material-ui/core'
import './App.scss';
import theme from './styles/theme'

import HomePage from './pages/HomePage'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HomePage />
    </ThemeProvider>
  );
}

export default App;

import React from 'react';
import './App.css';
import { Wrapper } from './components/containers/Wrapper';
import { Theme } from './theme/theme';
import { ThemeProvider } from '@mui/material';

function App() {
  return (
    <Wrapper>
      <ThemeProvider theme={Theme}>
        <h1>Hola! estoy en georgia?</h1>
      </ThemeProvider>
    </Wrapper>
  );
}

export default App;

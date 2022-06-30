import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Loading from './utils/Loading'
import './utils/i18n';

const themeOptions = {
  palette: {
    primary: {
      main: '#19d219',
      contrastText: "#fff"
    },
    secondary: {
      main: '#aaaaaa'
    },
  }
}

const theme = createTheme(themeOptions);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <React.Suspense fallback={<Loading/>}>
        <App />
      </React.Suspense>
    </ThemeProvider>
  </React.StrictMode>
);

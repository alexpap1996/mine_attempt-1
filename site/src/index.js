import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Loading from './utils/Loading'
import './utils/i18n';
import Context from './contexts/Context'

const themeOptions = {
  palette: {
    primary: {
      main: '#5FD068',
      contrastText: "#fff"
    },
    secondary: {
      main: '#F5DF99'
    },
    backgroundColor: '#F6FBF4',
  },
}

const theme = createTheme(themeOptions);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context>
      <ThemeProvider theme={theme}>
        <React.Suspense fallback={<Loading/>}>
          <App />
        </React.Suspense>
      </ThemeProvider>
    </Context>
  </React.StrictMode>
);

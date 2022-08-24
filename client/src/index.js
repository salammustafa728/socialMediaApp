import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from "react-redux";
import { createStore, applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import './index.css';
import { ThemeProvider } from "@mui/styles";
import { createTheme } from '@mui/material/styles';
const theme =createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});
const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(reducers, compose(applyMiddleware(thunk)))
root.render(
  <Provider store={store}>

  <React.StrictMode>
  <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  </React.StrictMode>
 
  </Provider>
);
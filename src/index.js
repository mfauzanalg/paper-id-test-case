import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { SnackbarProvider } from 'notistack';
import Grow from '@material-ui/core/Grow';

ReactDOM.render(
  <SnackbarProvider
    maxSnack={5}
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    TransitionComponent={Grow}
    autoHideDuration={1500}
    preventDuplicate={true}
  >
    <App />
  </SnackbarProvider>,
  document.getElementById('root')
);

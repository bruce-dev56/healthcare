import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.render(
  <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
    <React.Fragment>
      <Provider store={store}>
        <App />
      </Provider>
    </React.Fragment>,
  </GoogleOAuthProvider>,
  document.getElementById('root')
);
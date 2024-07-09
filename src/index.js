import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

const root = createRoot(document.getElementById('root'));

root.render(
  <Auth0Provider
    domain="dev-odd1jer35444nznf.us.auth0.com"
    clientId="linhBXo2gZRxUrymNfcjp8d769yej7P9"
    redirectUri={`${window.location.origin}/Dashboard`}
    audience="https://dev-odd1jer35444nznf.us.auth0.com/api/v2/"
    scope="read:current_user update:current_user_metadata"
  >
    <App />
  </Auth0Provider>
);

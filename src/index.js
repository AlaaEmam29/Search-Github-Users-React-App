import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { AppProvider } from './Context/Context';
import App from './Components/App/App';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from "@auth0/auth0-react";
//
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Auth0Provider
    domain="dev-0t9erb5n.us.auth0.com"
    clientId="DhyXZh7pVdmqdtEm8fRlHDpoaucVQuQk"
      redirectUri={window.location.origin}
      cacheLocation="localstorage"
    >
      <AppProvider>
      <BrowserRouter>
    <App />          
      </BrowserRouter>
    </AppProvider>
</Auth0Provider>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

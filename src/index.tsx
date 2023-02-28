import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Dashboard from './views/Dashboard';
import reportWebVitals from './reportWebVitals';
import SignIn from './views/SignIn';
import SignInl from './views/SignInl'
import UserProfile from './views/UserProfile'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <SignIn/> */}
    {/* <SignInl/> */}
    {/* <Dashboard/> */}
    <UserProfile/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

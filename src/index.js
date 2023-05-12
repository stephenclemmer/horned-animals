import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';

// import reportWebVitals from './reportWebVitals';


/* This code is creating a root React component using `ReactDOM.createRoot()` and rendering the `<App/>` component inside it using `root.render()`.The root component is mounted to the DOM element with the ID of 'root'. */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// reportWebVitals();

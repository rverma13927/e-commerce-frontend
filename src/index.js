import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';
import jwtService from './service/jwtService'

//interceptor
axios.interceptors.request.use((request) => {

  const user = JSON.parse(localStorage.getItem('user'));
  if (user && user.accessToken) {
    if (jwtService.isJwtExpired()) {
      // go to login page
      localStorage.clear()
      window.location.href = "/login";
      return request;
    } else {
      request.headers.Authorization = "Bearer " + user.accessToken;
      return request;
    }
  } else {
    return request;
  }
})


axios.interceptors.response.use((response) => {
  return response;
})


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

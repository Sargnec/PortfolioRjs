import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './components/app';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/style.css';
import './assets/css/main.css';


ReactDOM.render(
    <BrowserRouter>
        <App />
  </BrowserRouter>,
  document.querySelector('#root')
)
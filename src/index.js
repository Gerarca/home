import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './main/App';
import { HashRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);


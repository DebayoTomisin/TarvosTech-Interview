import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom"
import {ItemProvider} from "./context"
import './index.css';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <ItemProvider>
      <Router>
        <App />
      </Router>
    </ItemProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


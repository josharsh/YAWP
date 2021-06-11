import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Home from './components/Home';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
ReactDOM.render(
  
  <React.StrictMode>
   <Router>
    <Route exact path="/" component={Home} />
    <Route exact path="/new" component={App} />
  </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals(); 

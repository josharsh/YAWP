import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Home from './components/Home';
import Docs from "./components/Docs/docs.js"
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
ReactDOM.render(
  
  <React.StrictMode>
   <Router>
    <Route exact path="/" component={Home} />
    <Route exact path="/play" component={App} />
    <Route exact path="/docs" component={Docs} />
  </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals(); 

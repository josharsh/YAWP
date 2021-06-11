import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Index from './Index/Index';


function Home() {
  return (
    <Index />
  );
}

export default Home;

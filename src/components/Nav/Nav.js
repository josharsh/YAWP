import React, { Component } from "react"
import App from "../App.js"
import Home from "../Home.js"
import './landing-page-dark.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class Nav extends Component {

    constructor(props){
        super(props)
        this.state = {
            isDark: this.props.isDark,
            mode: this.props.mode
        }
    }

    toggleDark = () => {
        console.log("In nav - " + this.props.isDark)
        this.props.toggleDark();
        this.forceUpdate();
    }

    render(){
        let isDark = this.props.isDark;
        return (
            <nav className={`navbar navbar-expand-lg navbar-${!isDark? 'light':'dark'} bg-${isDark? 'dark':'light'} static-top header-a`}>
                <div className="container nav-container">
                    <a className="navbar-brand brand" href="/">YAWP</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
    
                    <div className="collapse navbar-collapse alink" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="https://josharsh.herokuapp.com">Developer</a>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/docs">Docs</Link>
                            </li>
                            <Link className={`btn btn-outline-${isDark? 'light':'dark'} start`} to="/play">Get Started</Link>
                        </ul>
                    </div>
                </div>
                <div className="toggle-button-container">
                    <button className={`toggleButton  ${!isDark? 'darkButton':''}`} onClick={this.toggleDark}>{!isDark? 'Dark Mode!' : 'Light Mode!'}</button>
                </div>
                
            </nav>
        );
    }
}

export default Nav;
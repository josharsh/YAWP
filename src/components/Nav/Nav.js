import React from "react"
import App from "../App.js"
import Home from "../Home.js"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light static-top header-a">
            <div className="container nav-container">
                <a className="navbar-brand brand" href="#">YAWP</a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse alink" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="https://josharsh.herokuapp.com">Developer</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Sponsor Projects like this</a>
                        </li>
                        <Link className="btn btn-outline-dark start" to="/play">Get Started</Link>
                    </ul>


                </div>


            </div>
            
        </nav>
    );
}

export default Nav;
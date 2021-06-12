import React from "react";
import App from "../App.js";
import Home from "../Home.js";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function NavBottom(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light static-top .header-bottom -a">
      <div className="container nav-container">
        <div class="col-md-4 col-sm-4 col-xs-12">
          <p class="copyright-text">Copyright &copy; 2021 </p>
        </div>
        <div class="col-md-6 col-sm-4 col-xs-12">
          <a className="nav-link" href="https://josharsh.herokuapp.com">
            Author
          </a>
        </div>
        <div
          className=" col-md-2 col-sm-4 col-xs-12 collapse navbar-collapse alink"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/docs">
                Docs
              </a>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                onClick={() => {
                  alert("Contributing guidelines will be available soon");
                }}
              >
                Contribute
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBottom;

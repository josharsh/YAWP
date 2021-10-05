import React from "react";
import {Link} from "react-router-dom"
import './landing-page-dark.css';
import { useState } from "react";
function Content() {
    const [isDark, setDark] = useState(false);
    const toggleDark = () => {
        setDark(!isDark);
    }
    return (
        <div className = {` ${isDark? 'dark-container':''}`}>
            <div>
                <button className={`toggleButton  ${!isDark? 'darkButton':''}`} onClick={toggleDark}>{!isDark? 'Dark Mode!' : 'Light Mode!'}</button>
            </div>
            <div className="container content">
                <div className="row">
                    
                    <div className="col-sm-4 talk">
                        <h1 className="heading-text" style={isDark? {"color":"white"} : {}}>Yet Another</h1>
                        <h1 className="heading-text" style={isDark? {"color":"white"} : {}}>Web Playground</h1>
                        <br />
                        <h6 className="bold-four subheading-text" style={isDark? {"color":"white"} : {}}>
                            Does Zoom not work well for your remote web lesson needs? 
                            Try a web playground that allows snippeting your lessons in real time.
                    </h6>
                        <br />
                        <h6><Link className="btn btn-dark start start-two" to="/play">Try now!</Link></h6>
                    </div>
                    <div className="col-sm-8 showcase-img">
                        {/* <div className="circle"></div> */}
                    </div>
                </div>
            </div>

            <section class={`features-icons bg-${isDark?'dark light-text':'light'} text-center det-ails`}>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill={isDark? "white" : "#352478" } class="bi bi-window" viewBox="0 0 16 16">
                                    <path d="M2.5 4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm2-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm1 .5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"/>
                                    <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2zm13 2v2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zM2 14a1 1 0 0 1-1-1V6h14v7a1 1 0 0 1-1 1H2z"/>
                                </svg>
                                <h5>HTML</h5>
                                <p class="lead mb-0">Hey! Too Much Layout </p>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill={isDark? "white" : "#352478" } class="bi bi-stack" viewBox="0 0 16 16">
                                    <path d="m14.12 10.163 1.715.858c.22.11.22.424 0 .534L8.267 15.34a.598.598 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.598.598 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.598.598 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535L7.733.063z"/>
                                    <path d="m14.12 6.576 1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.598.598 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.659z"/>
                                </svg>
                                <h5>CSS</h5>
                                <p class="lead mb-0">
                                   #titanic <br/>float:none
                                </p>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="features-icons-item mx-auto mb-0 mb-lg-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill={isDark? "white" : "#352478" } class="bi bi-check-circle" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                    <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                                </svg>
                                <h5>Javascript</h5>
                                <p class="lead mb-0">
                                 Remove duplicates from the iterable `arr`
[...new Set(arr)]
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Content;
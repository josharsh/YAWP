import React from "react";
import {Link} from "react-router-dom"
function Content() {
    return (
        <div>
            <div className="container content">

                <div className="row">
                    
                    <div className="col-sm-4 talk">
                        <h1 style={{"font-family": 'Abel'}}>Yet Another</h1>
                        <h1 style={{"font-family": 'Abel'}}>Web Playground</h1>
                        <br />
                        <h6 className="bold-four" style={{"font-family": 'Bree Serif'}}>
                            Sheldon wants to teach web but zoom does not work well for him.
                    </h6>
                        <br />
                        <h6><Link className="btn btn-dark start start-two" to="/new">Try now!</Link></h6>
                    </div>
                    <div className="col-sm-8 showcase-img">
                        {/* <div className="circle"></div> */}
                    </div>
                </div>
            </div>

            <section class="features-icons bg-light text-center det-ails">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                                <div class="features-icons-icon d-flex  icon-bra-ails">
                                    <i class="icon-screen-desktop m-auto text-primary icon-ails"></i>
                                </div>
                                <h5>HTML</h5>
                                <p class="lead mb-0">Hey! Too Much Layout </p>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                                <div class="features-icons-icon d-flex  icon-bra-ails">
                                    <i class="icon-layers m-auto text-primary icon-ails"></i>
                                </div>
                                <h5>CSS</h5>
                                <p class="lead mb-0">
                                   #titanic <br/>float:none
                                </p>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="features-icons-item mx-auto mb-0 mb-lg-3">
                                <div class="features-icons-icon d-flex  icon-bra-ails">
                                    <i class="icon-check m-auto text-primary icon-ails"></i>
                                </div>
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
import React, { Component } from "react"
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import "./docs.css"
function Docs(){
        return (
        <div class="body-docs">
        <Header/>
        <div class="grid-container">
            <nav id="navbar">
                <header>YAWP Documentation</header>
                <ul>
                    <li><a href="#Try_YAWP" class="nav-link">Try YAWP</a></li>
                    <li><a href="#Online_Playgrounds" class="nav-link">What are PlayGrounds</a></li>
                    <li><a href="#Getting Started" class="nav-link">Getting Started</a></li>
                    <li><a href="#Using Play" class="nav-link">Using Play</a></li>
                    <li><a href="#Learn_React" class="nav-link">Contributing Guidelines</a></li>
                    <li><a href="#First_Examples" class="nav-link">More on YAWP</a></li>
                    {/* <li><a href="#React_for_Beginners" class="nav-link">React for Beginners</a></li>
                    <li><a href="#React_for_Designers" class="nav-link">React for Designers</a></li>
                    <li><a href="#Javascript_Resources" class="nav-link">JavaScript Resources</a></li>
                    <li><a href="#Practical_Tutorial" class="nav-link">Practical Tutorial</a></li>
                    <li><a href="#Step_by_Step_Guide" class="nav-link">Step by Step Guide</a></li>
                    <li><a href="#Thinking_in_React" class="nav-link">Thinking in React</a></li>
                    <li><a href="#Recommended_Courses" class="nav-link">Recommended Courses</a></li>
                    <li><a href="#Advanced_Concepts" class="nav-link">Advanced Concepts</a></li>
                    <li><a href="#API_Reference" class="nav-link">API Reference</a></li>
                    <li><a href="#FAQ_and_Reference" class="nav-link">FAQ and Reference</a></li>
                    <li><a href="#Stay_Informed" class="nav-link">Stay Informed</a></li>
                    <li><a href="#Versioned_Documentation" class="nav-link">Versioned Documentation</a></li>
                    <li><a href="#Something_Missing" class="nav-link">Something Missing</a></li> */}
                </ul>
            </nav>
            <main id="main-doc" class="content-docs">
                <section class="main-section" id="Try_YAWP">
                    <header>
                        <h3>Try YAWP</h3>
                    </header>
                    <p>
                        YAWP is not yet another web playground. At its heart it lets your write code and see results on the fly.
                        <b>You can use YAWP to write code, see results as you build and take snippets as you go.</b> Whether
                        you want to get a taste of web, or interactively teach web lessons with options to save what you teach, YAWP docs will help you get started and fix problems as you face them.
                    </p>
                </section>
                <section class="main-section" id="Online_Playgrounds">
                    <header>
                        <h3>What is a Playground</h3>
                    </header>
                    <code>
                    A web playground does not mind you playing around as you wish. From useful and liberating online code editors to amazing production grade environments, playgrounds on internet help you learn, teach, play, test and more.
                    
                    </code>
                </section>
                <section class="main-section" id="Getting Started">
                    <header>
                        <h3>Getting Started</h3>
                    </header>
                    <p>
                        Go to <a href="https://yawp.vercel.app/play ">https://yawp.vercel.app/play </a> and start by typing HTML, CSS and JS on the respective editors.
                    </p>
                </section>
                <section class="main-section" id="Using Play">
                    <header>
                        <h3>Using Play</h3>
                    </header>
                    <p>
                        Once you are in YAWP, you can quickly start by writing custom HTML, CSS and Javascript. The results will appear on the right as you type.
                        If you are using YAWP for interactive lessons, it is recommended to use the floating action button for utilities. 
                    <ul>
                        <li>
                        You can make a snippet of the code on screen using the screenshot tool. The screenshot tool can be accessed using the bottom right floating action button.
                        </li>
                        <li>
                        You can minimize the editor panes using the top right buttons on the code editors.
                        </li>
                        <li>
                        To clear content, use the Eraser tool from the actions menu.
                        </li>
                    </ul>
                    </p>
                </section>
                <section class="main-section" id="Learn_React">
                    <header>
                        <h3>Contributing Guidelines</h3>
                    </header>
                    <p>
                        Contribution schema for YAWP is work in progress and will be updated soon. YAWP will go open source soon :)
                    </p>
                    <ul>
                        <li>
                       You can contribute to code, documentation or product management.
                        </li>
                        <li>
                       If you wish to receive notifications from YAWP about new upgrades, news and announcements, use the subscribe button.
                        </li>
                    </ul>
                </section>
                <section class="main-section" id="More_on_YAWP">
                    <header>
                        <h3>More on YAWP</h3>
                    </header>
                    <p>
                        YAWP Docs will be evolving as and when there are new upgrades to it. Watch this space for more.
                    </p>
                    <pre>
                    </pre>
                </section>
            </main>
        </div>
    </div>
        )
}
export default Docs;
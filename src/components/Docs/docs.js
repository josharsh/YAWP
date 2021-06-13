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
                    <li><a href="#Contribution" class="nav-link">Contributing Guidelines</a></li>
                    <li><a href="#Next_On_YAWP" class="nav-link">Coming Soon</a></li>
                    <li><a href="#More_on_YAWP" class="nav-link">More on YAWP</a></li>
                    
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
                        <h3>What is a Playground </h3>
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
                        Go to <a href="https://yawp.josharsh.tech/play ">https://yawp.josharsh.tech/play </a> and start by typing HTML, CSS and JS on the respective editors.
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
                        <li>
                        YAWL utilizes browser local storage to store your work. Next time you come to use YAWP, you can start where you left.
                        </li>
                    </ul>
                    </p>
                </section>
                <section class="main-section" id="Contribution">
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
                <section class="main-section" id="Next_On_YAWP">
                    <header>
                        <h3>Coming soon on YAWP</h3>
                    </header>
                    <li>
                     Ability to make snippets for rendered output. 
                    </li>
                     <li>
                      User authentication and ability to share snippets as GISTs
                    </li>
                    <li>
                      Support for multiple output snippet formats including PDF and Markdown.
                    </li>
                    <li>
                      Support for Live Markdown Previewer for live lessons while taking notes.
                    </li>
                    <pre>
                    </pre>
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
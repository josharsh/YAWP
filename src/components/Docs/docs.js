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
                    <li><a href="#Learn_React" class="nav-link">Learn React</a></li>
                    <li><a href="#First_Examples" class="nav-link">First Examples</a></li>
                    <li><a href="#React_for_Beginners" class="nav-link">React for Beginners</a></li>
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
                    <li><a href="#Something_Missing" class="nav-link">Something Missing</a></li>
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
                        When starting a React project, a simple HTML page with script tags
                        might still be the best option. It only takes a minute to set up! As
                        your application grows, you might want to consider a more integrated
                        setup.  
                    <ul>
                        <li>
                        There are several JavaScript toolchains we recommend for larger
                        applications.
                        </li>
                        <li>
                        Each of them can work with little to no configuration
                        and lets you take full advantage of the rich React ecosystem. Learn
                        how.
                        </li>
                    </ul>
                    </p>
                    <pre>
                    <code>npx create-react-app projectname</code>
                    </pre>
                </section>
                <section class="main-section" id="Learn_React">
                    <header>
                        <h3>Learn React</h3>
                    </header>
                    <p>
                        People come to React from different backgrounds and with different
                        learning styles. Whether you prefer a more theoretical or a practical
                        approach, we hope you’ll find this section helpful.
                    </p>
                    <ul>
                        <li>
                        If you prefer to learn by doing, start with our practical tutorial.
                        </li>
                        <li>
                        If you prefer to learn concepts step by step, start with our guide
                        to main concepts.
                        </li>
                    </ul>
                    <p>
                        Like any unfamiliar technology, React does have a learning curve. With
                        practice and some patience, you will get the hang of it.
                    </p>
                </section>
                <section class="main-section" id="First_Examples">
                    <header>
                        <h3>First Examples</h3>
                    </header>
                    <p>
                        The React homepage contains a few small React examples with a live
                        editor. Even if you don’t know anything about React yet, try changing
                        their code and see how it affects the result.
                    </p>
                    <pre>
                    </pre>
                </section>
                <section class="main-section" id="React_for_Beginners">
                    <header>
                        <h3>React for Beginners</h3>
                    </header>
                    <p>
                        If you feel that the React documentation goes at a faster pace than
                        you’re comfortable with, check out this overview of React by Tania
                        Rascia. It introduces the most important React concepts in a detailed,
                        beginner-friendly way. Once you’re done, give the documentation
                        another try!
                    </p>
                </section>
                <section class="main-section" id="React_for_Designers">
                    <header>
                        <h3>React for Designers</h3>
                    </header>
                    <p>
                        If you’re coming from a design background, these resources are a great
                        place to get started.
                    </p>
                </section>
                <section class="main-section" id="Javascript_Resources">
                    <header>
                        <h3>JavaScript Resources</h3>
                    </header>
                    <code>
                        The React documentation assumes some familiarity with programming in
                        the JavaScript language. 
                        <ul>
                        <li>
                            You don’t have to be an expert, but it’s harder to learn both
                            React and JavaScript at the same time
                        </li>
                        <li>
                            We recommend going through this JavaScript overview to check your
                            knowledge level.
                        </li>
                        </ul>
                        It will take you between 30 minutes and an hour but you will feel more
                        confident learning React.
                    </code>
                </section>
                <section class="main-section" id="Practical_Tutorial">
                    <header>
                        <h3>Practical Tutorial</h3>
                    </header>
                    <code>
                    If you prefer to learn by doing, check out our practical tutorial. In
                    this tutorial, we build a tic-tac-toe game in React. You might be
                    tempted to skip it because you’re not into building games — but give
                    it a chance. The techniques you’ll learn in the tutorial are
                    fundamental to building any React apps, and mastering it will give you
                    a much deeper understanding.
                    </code>
                </section>
                <section class="main-section" id="Step_by_Step_Guide">
                    <header>
                        <h3>Step by Step Guide</h3>
                    </header>
                    <p>
                        If you prefer to learn concepts step by step, our guide to main
                        concepts is the best place to start. Every next chapter in it builds
                        on the knowledge introduced in the previous chapters so you won’t miss
                        anything as you go along.
                    </p>
                </section>
                <section class="main-section" id="Thinking_in_React">
                    <header>
                        <h3>Thinking in React</h3>
                    </header>
                    <p>
                        Many React users credit reading Thinking in React as the moment React
                        finally “clicked” for them. It’s probably the oldest React walkthrough
                        but it’s still just as relevant.
                    </p>
                </section>
                <section class="main-section" id="Recommended_Courses">
                    <header>
                        <h3>Recommended Courses</h3>
                    </header>
                    <p>
                        Sometimes people find third-party books and video courses more helpful
                        than the official documentation. We maintain a list of commonly
                        recommended resources, some of which are free.
                    </p>
                </section>
                <section class="main-section" id="Advanced_Concepts">
                    <header>
                        <h3>Advanced Concepts</h3>
                    </header>
                    <p>
                        Once you’re comfortable with the main concepts and played with React a
                        little bit, you might be interested in more advanced topics. This
                        section will introduce you to the powerful, but less commonly used
                        React features like context and refs.
                    </p>
                </section>
                <section class="main-section" id="API_Reference">
                    <header>
                        <h3>API Reference</h3>
                    </header>
                    <p>
                        This documentation section is useful when you want to learn more
                        details about a particular React API. For example, React.Component API
                        reference can provide you with details on how setState() works, and
                        what different lifecycle methods are useful for.
                    </p>
                </section>
                <section class="main-section" id="FAQ_and_Reference">
                    <header>
                        <h3>FAQ and Reference</h3>
                    </header>
                    <p>
                        The glossary contains an overview of the most common terms you’ll see
                        in the React documentation. There is also a FAQ section dedicated to
                        short questions and answers about common topics, including making AJAX
                        requests, component state, and file structure.
                    </p>
                </section>
                <section class="main-section" id="Stay_Informed">
                    <header>
                        <h3>Stay Informed</h3>
                    </header>
                    <p>
                        The React blog is the official source for the updates from the React
                        team. Anything important, including release notes or deprecation
                        notices, will be posted there first. You can also follow the @reactjs
                        account on Twitter, but you won’t miss anything essential if you only
                        read the blog. Not every React release deserves its own blog post, but
                        you can find a detailed changelog for every release in the
                        CHANGELOG.md file in the React repository, as well as on the Releases
                        page.
                    </p>
                </section>
                <section class="main-section" id="Versioned_Documentation">
                    <header>
                        <h3>Versioned Documentation</h3>
                    </header>
                    <p>
                        This documentation always reflects the latest stable version of React.
                        Since React 16, you can find older versions of the documentation on a
                        separate page. Note that documentation for past versions is
                        snapshotted at the time of the release, and isn’t being continuously
                        updated.
                    </p>
                </section>
                <section class="main-section" id="Something_Missing">
                    <header>
                        <h3>Something missing</h3>
                    </header>
                    <p>
                        If something is missing on this simple page, please refer to the
                        original React Documentation Page.
                    </p>
                </section>
            </main>
        </div>
    </div>
        )
}
export default Docs;
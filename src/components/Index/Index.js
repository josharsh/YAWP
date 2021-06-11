import React, { Component } from "react"
import Header from '../Header/Header';
import Content from './Content';
import Footer from '../Footer/Footer';

class Index extends Component {
    render() {
        return (
            /* To be used for custom themes */
            <div class="main-container">
                <Header mode="mode1"/>
                <Content mode="mode1" />
                <Footer mode="mode1"/>
            </div>

        )
    }
}
export default Index;
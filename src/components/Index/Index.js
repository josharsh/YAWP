import React, { Component } from "react"
import Header from '../Header/Header';
import Content from './Content';
import Footer from '../Footer/Footer';

class Index extends Component {

    constructor(props){
        super(props);
        this.state = {
            isDark: false
        };
        this.toggleDark = this.toggleDark.bind(this);
    }   
    
    toggleDark = () => {
        let flip = !(this.state.isDark);
        this.setState({isDark: flip});
        console.log("Click!");
        console.log(this.state.isDark);
    }

    render() {
        const {isDark} = this.state;
        return (
            /* To be used for custom themes */
            <div class="main-container">
                <Header mode="mode1" isDark={isDark} toggleDark={this.toggleDark} />
                <Content mode="mode1" isDark={isDark} toggleDark={this.toggleDark} />
                <Footer mode="mode1" isDark={isDark} toggleDark={this.toggleDark} />
            </div>

        )
    }
}

export default Index;
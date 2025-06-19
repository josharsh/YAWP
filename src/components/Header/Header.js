import React, { Component } from "react";
import Nav from "../Nav/Nav";
import {Link} from "react-router-dom"
class Header extends Component{

    constructor(props){
        super(props)
        this.state = {
            isDark: this.props.isDark,
            mode: this.props.mode
        }
    }

    toggleDark = () => {
        console.log("In content - " + this.props.isDark)
        this.props.toggleDark();
        this.forceUpdate();
    }

    render(){
        let isDark = this.props.isDark;
        let mode = this.props.mode;
        return (
            <div>
                <Nav className={mode} isDark={isDark} toggleDark={this.toggleDark}> </Nav>
            </div>
        )
    }

}

export default Header;
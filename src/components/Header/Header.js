import React from "react";

import Nav from "../Nav/Nav";

function Header(mode) {
    return (
        <Nav className={mode}/>
    );

}

export default Header;
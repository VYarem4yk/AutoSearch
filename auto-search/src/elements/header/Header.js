import React, { Component, Fragment } from "react";
import "./styles/index.css";

const APP_NAME = "Auto Select";

class Header extends Component {
  render() {
    return <header className="header">{APP_NAME}</header>;
  }
}

export default Header;

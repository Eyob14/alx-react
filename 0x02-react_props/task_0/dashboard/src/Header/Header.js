import React from "react";
import logo from "../logo.jpg";
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} alt="logo" />
        <h1>School dashboard</h1>
      </header>
    );
  }
}

export default Header;
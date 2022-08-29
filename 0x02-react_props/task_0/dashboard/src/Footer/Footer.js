import React from "react";
import { getFullYear, getFooterCopy } from "../utils";
import "./Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <footer className="App-footer">
        <p>
          Copyright {getFullYear()} - {getFooterCopy(true)}
        </p>
      </footer>
    );
  }
}

export default Footer;

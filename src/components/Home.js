// this component for home page
import React, { Component } from "react";
import "../styles/home.css";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="left">
          <p>Hi there,</p>
          <h2 className="title">I'm Tim</h2>
        </div>
        <div className="right">
          <img src="Asset-921.png" alt="" />
        </div>
      </div>
    );
  }
}
export default Home;

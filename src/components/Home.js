// this component for home page
import React, { Component } from "react";
import "../styles/home.css";
import "../styles/normalize.css";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="left">
          <p>Hi there,</p>
          <h2 className="title">I'm Tim</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
            voluptatum! Ipsam quam eum porro omnis obcaecati laborum aperiam
            vitae amet!
          </p>
          <br></br>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            itaque cum, laboriosam quae excepturi ipsum asperiores rem fugiat
            deserunt illum.
          </p>
        </div>
        <div className="right">
          <img src="home_computer_mobile.png" alt="" />
        </div>
      </div>
    );
  }
}
export default Home;

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";

import "./styles/app.css";

class App extends React.Component {
  state = {
    navbar_open: false,
  };

  // Navbar Hamburger open / close toggle
  navbarToggle = () => {
    // Pass a function to set state
    // Receive the previous state as an arugment
    this.setState((prevState) => {
      // Set the state to the opposite of the previous state
      return { navbar_open: !prevState.navbar_open };
    });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar navbarClickHandler={this.navbarToggle} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/work" component={Work} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

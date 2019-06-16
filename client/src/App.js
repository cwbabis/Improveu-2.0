import React, { Component } from "react";
import "./App.css";
import Wrapper from "./components/Wrapper";
import Card from "./components/Card";
import Nav from "./components/Nav";
import User from "./components/User"

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <br></br><br></br>
        <div>
          <User />
          <Card />
        </div>
      </div>
    );
  }
}

export default App;

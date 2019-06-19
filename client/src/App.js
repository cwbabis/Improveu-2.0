import React, { Component } from "react";
import "./App.css";
import Card from "./components/Goal Card";
import Nav from "./components/Nav";
import UserCard from "./components/User Card";

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <br></br><br></br>

        <UserCard />
        <Card />

      </div>
    );
  }
}

export default App;

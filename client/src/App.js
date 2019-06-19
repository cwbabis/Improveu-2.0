import React, { Component } from "react";
import "./App.css";
import Card from "./components/Goal Card";
import Nav from "./components/Nav";
import UserCard from "./components/User Card";
import Row from "./components/Row";
import Col from "./components/Col";
import Achievement from "./components/Achievement"

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <br></br><br></br>
        <Row>
          <UserCard />
          <Card />
          <Achievement />
        </Row>
      </div>
    );
  }
}

export default App;

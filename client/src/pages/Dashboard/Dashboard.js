import React, { Component } from "react";
/* import "./App.css"; */
import GoalCard from "./components/GoalCard";
import Nav from "./components/Nav";
import UserCard from "./components/UserCard";
import Row from "./components/Row";
/* import Col from "./components/Col"; */

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Nav />
        <br></br><br></br>
        <Row>
          <UserCard />
          <GoalCard />
        </Row>
      </div>
    );
  }
}

export default Dashboard;
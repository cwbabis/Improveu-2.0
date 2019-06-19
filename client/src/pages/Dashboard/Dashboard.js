import React, { Component } from "react";
/* import "./App.css"; */
import GoalCard from "../../components/GoalCard";
import Nav from "../../components/Nav";
import UserCard from "../../components/UserCard";
import Row from "../../components/Row";
import Achievement from "../../components/Achievement";
import AdSpace from "../../components/AdSpace";
import Col from "../../components/Col";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Nav />
        <br></br><br></br>
        <Row>
        <Col size="md-3">
          <Row>
            <UserCard/>
          </Row>
          <Row>
            <Achievement />
          </Row>
        </Col>
        <Col size="md-6">
          <Row>
            <GoalCard />
          </Row>
          <Row>
            <GoalCard />
          </Row>
          <Row>
            <GoalCard />
          </Row>
        </Col>
        <Col size="md-3">
        <Row>
          <AdSpace />
        </Row>
        </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
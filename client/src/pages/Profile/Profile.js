import React, { Component } from "react";
/* import "./App.css"; */
import GoalCard from "../../components/GoalCard";
import Nav from "../../components/Nav";
import UserCard from "../../components/UserCard";
import Row from "../../components/Row";
import Achievement from "../../components/Achievement";
import Col from "../../components/Col";
import AboutMe from "../../components/AboutMe";

class Profile extends Component {
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
        <Col size="md-9">
          <Row>
            <AboutMe />
          </Row>
          <Row className="col-md-9">
          My Goals
          </Row>
          <Row className="col-md-9" >
            <GoalCard />
          </Row>
          <Row className="col-md-9" >
            <GoalCard />
          </Row>
          <Row className="col-md-9" >
            <GoalCard />
          </Row>
        </Col>

        </Row>
      </div>
    );
  }
}

export default Profile;
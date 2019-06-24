import React, { Component } from "react";
/* import "./App.css"; */
import GoalCard from "../../components/GoalCard";
import Nav from "../../components/Nav";
import UserCard from "../../components/UserCard";
import Row from "../../components/Row";
import Achievement from "../../components/Achievement";
import AdSpace from "../../components/AdSpace";
import Col from "../../components/Col";
import NewGoalCard from "../../components/NewGoalCard";
import API from "../../utils/API";

class Dashboard extends Component {

  state = {
    id: "",
    profile: {},
    goals: {}
  };

  componentDidMount() {
    this.getProfile();
    this.getGoals()
  }

  getProfile = () => {
    API.getProfile(this.state.id)
      .then(res =>
        this.setState({
          profile: res.data
        })
      )
      .catch(() =>
        this.setState({
          profile: {},
          message: "Please sign-in"
        })
      );
  };

  getGoals = () => {
    API.getAllGoals()
      .then(res =>
        this.setState({
          goals: res.data
        })
      )
      .catch(() =>
        this.setState({
          goals: {},
          message: "Looks like there aren't any goals here yet."
        })
      );
  };

  //This creates on new goal and re-loads the goals page to display all goals including the newly created one
  createGoal = (goalData) => {
    API.createNewGoal(goalData)
      .then(
        this.getGoals())
        .catch(console.log("something went wrong. Please try again later."))
  }

  render() {
    return (
      <div>
        <Nav />
        <br></br><br></br>
        <Row>
          <Col size="md-3">
            <Row>
              <UserCard />
            </Row>
            <Row>
              <Achievement />
            </Row>
          </Col>
          <Col size="md-6">
            <Row>
              <NewGoalCard />
            </Row>
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
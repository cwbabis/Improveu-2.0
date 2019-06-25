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
    id: "5d0e8c4b2eaeff7a36c605d4",
    profile: [],
    goals: [],
    goalInput: "Post a Goal.",

  };

  componentDidMount() {
    this.getProfile();
    this.getGoals()
  }

  getProfile = () => {
    API.getProfile(this.state.id)
      .then(res => {
        this.setState({
          profile: res.data
        })
        console.log(this.state)
      }
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
      .then(res =>{
        this.setState({
          goals: res.data
        })
        console.log(this.state)
      }
      )
      .catch(() =>
        this.setState({
          goals: {},
          message: "Looks like there aren't any goals here yet."
        })
      );
  };

  handleGoalInput(event) {
    this.setState({goalInput: event.target.value})
    console.log(this.state);
  };

  //This creates on new goal and re-loads the goals page to display all goals including the newly created one
  createGoal = (goalData) => {
    API.createNewGoal(goalData)
      .then(
        this.getGoals())
      .catch(console.log("something went wrong. Please try again later."))
  }

  updateGoal = (id, data) => {
    API.updateGoal(id, data)
    .then((res) => {
      console.log(res)
      this.getGoals()
    })
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
              <UserCard name={this.state.profile.name}/>
            </Row>
            <Row>
              <Achievement />
            </Row>
          </Col>
          <Col size="md-6">
            <Row>
              <NewGoalCard createGoal={this.createGoal}
              goalInput={this.state.goalInput} handleGoalInput={this.handleGoalInput}/>
            </Row>
         {this.state.goals.map(goal => (
              <Row>
                <GoalCard
                  title={goal.title}
                  goal={goal.goal}
                  creator={goal.userName}
                  partner={goal.partner}
                />
              </Row>
            ))} 
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
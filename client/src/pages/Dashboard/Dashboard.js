import React, { Component } from "react";
/* import "./App.css"; */
import GoalCard from "../../components/DashboardGoal";
import Nav from "../../components/Nav";
import UserCard from "../../components/UserCard";
import Row from "../../components/Row";
import Achievement from "../../components/Achievement";
import AdSpace from "../../components/AdSpace";
import Col from "../../components/Col";
import NewGoalCard from "../../components/NewGoalCard";
import API from "../../utils/API";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.profileId,
      profile: [],
      goals: [],
      newGoal: {
        goal: "",
        title: "New Goal",
        creatorId: this.id,
        partnerId: ""
      }
    };

    this.handleGoalSubmit = this.handleGoalSubmit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleBuddySubmit = this.handleBuddySubmit.bind(this)
  }

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
      .then(res => {
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

  handleInputChange(e) {
    console.log("Inside handleTextArea");
    let value = e.target.value;
    this.setState(
      prevState => ({
        newGoal: {
          ...prevState.newGoal,
          goal: value
        }
      }
      ),
      () => {console.log(this.state.newGoal)
      }
    );
  }


  //This creates on new goal and re-loads the goals page to display all goals including the newly created one

  handleGoalSubmit = event => {
    event.preventDefault();
    let goalData = this.state.newGoal;
    console.log(goalData);
    API.createNewGoal(goalData)
      .then(res => this.getGoals())
      .catch(err => console.log(err));
  };

  handleBuddySubmit = event => {
    event.preventDefault();
    let buddyData = { partnerId: this.state.id };
    let goalId = event.target.id;

    console.log(buddyData);
    console.log(goalId);

    API.updateGoal(goalId, buddyData)
      .then((res) => {
        console.log(res)
        this.getGoals()
      })
      .catch(console.log("something went wrong. Please try again later"))
  }

  render() {
    return (
      <div>
        <Nav />
        <br></br><br></br>
        <Row>
          <Col size="md-3">
            <Row>
              <UserCard name={this.state.profile.username} />
            </Row>
            <Row>
              <Achievement />
            </Row>
          </Col>
          <Col size="md-6">
            <Row>
              <NewGoalCard
                handleGoalSubmit={this.handleGoalSubmit}
                goal={this.state.newGoal.goal}
                handleGoalInput={this.handleInputChange}
              />
            </Row>
            {this.state.goals.reverse().map(goal => (
              <Row>
                <GoalCard
                  id={goal._id}
                  title={goal.title}
                  goal={goal.goal}
                  creator={goal.userName}
                  partner={goal.partner}
                  handleBuddySubmit={this.handleBuddySubmit}
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
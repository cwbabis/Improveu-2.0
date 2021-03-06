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
      profile: {
        id: "",
        username: "",
        image: ""
      },
      goals: [],
      newGoal: {
        goal: "",
        title: "New Goal",
        creatorId: "",
        partnerId: ""
      }
    };

    this.handleGoalSubmit = this.handleGoalSubmit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleBuddySubmit = this.handleBuddySubmit.bind(this)
  }

  //Initial state mounting functions
  componentWillMount() {
    this.getProfile();
  };

  componentDidMount() {
    this.getGoals()
  };

  //This function makes one of two initial API calls to receive profile information
  getProfile = () => {
    if(this.state.id) {
    API.getProfile(this.state.id)
      .then(res => {
        this.setState({
          profile: {
            id: res.data[0]._id,
            username: res.data[0].username,
            image: res.data[0].image
          }
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
    }
    else {
      console.log("not signed in")
    }
  };

  //This function is the second initial function that gathers all goals
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

  //Handles input change in the new goal form (on change, the state is updated and that dictates the value in the form)
  handleInputChange(e) {
    console.log("Inside handleTextArea");
    let value = e.target.value;
      this.setState({
        newGoal: {
              ...this.state.newGoal,
              goal: value
        }
    },
      () => {
        console.log(this.state)
      });
  };

  //This creates on new goal and re-loads the goals page to display all goals including the newly created one
  handleGoalSubmit = event => {
    event.preventDefault();
    let goalData = {
      goal: this.state.newGoal.goal,
      creatorID: this.state.profile.id,
      title: this.state.profile.username,
      image: this.state.profile.image,
      partnerID: ""
    };
    console.log(goalData);
    API.createNewGoal(goalData)
      .then(res => this.getGoals())
      .catch(err => console.log(err));
  };

  //This handles the put route to update the partner with a buddy
  handleBuddySubmit = event => {
    event.preventDefault();
    let buddyData = { partnerID: this.state.id };
    let goalId = event.target.id;

    console.log(buddyData);
    console.log(goalId);

    API.updateGoal(goalId, buddyData)
      .then((res) => {
        console.log(res)
        this.getGoals()
      })
      .catch(console.log("something went wrong. Please try again later"))
  };

  //Navigation clicks
  handleProfileClick = event => {

    this.props.history.push('/profile');

  };

  handleDashboardClick = event => {

    this.props.history.push('/dashboard');
  }

  handleSignOutClick = () => {

    this.props.history.push('/');
  }


  render() {
    return (
      <div>
        <Nav handleProfileClick={this.handleProfileClick}
        handleDashboardClick={this.handleDashboardClick}
        handleSignOutClick={this.handleSignOutClick}
        />
        <br></br><br></br>
        <Row>
          <Col size="md-3">
            <Row>
              <UserCard name={this.state.profile.username ? this.state.profile.username : "Please Sign In or Register"}
                image={this.state.profile.image ? this.state.profile.image : "https://www.orbistechnologies.com/wp-content/uploads/2018/12/profile-placeholder-image-gray-silhouette-no-vector-21542863-300x298.jpg"}
                handleProfileClick={this.handleProfileClick} />
            </Row>
            <Row>
              <Achievement />
            </Row>
          </Col>
          <Col size="md-6">
            <Row>
              <NewGoalCard
                id={this.state.profile.id}
                handleGoalSubmit={this.handleGoalSubmit}
                goal={this.state.newGoal.goal}
                handleGoalInput={this.handleInputChange}
                image={this.state.profile.image ? this.state.profile.image : "https://www.orbistechnologies.com/wp-content/uploads/2018/12/profile-placeholder-image-gray-silhouette-no-vector-21542863-300x298.jpg"}
              />
            </Row>
            {[...this.state.goals].reverse().map(goal => (
              <Row>
                <GoalCard
                  id={goal._id}
                  title={goal.title}
                  goal={goal.goal}
                  creator={goal.userName}
                  partner={goal.partnerID}
                  image={goal.image ? goal.image : "https://www.orbistechnologies.com/wp-content/uploads/2018/12/profile-placeholder-image-gray-silhouette-no-vector-21542863-300x298.jpg"}
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
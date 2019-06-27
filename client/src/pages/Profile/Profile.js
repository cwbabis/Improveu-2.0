import React, { Component } from "react";
import GoalCard from "../../components/GoalCard";
import Nav from "../../components/Nav";
import ProfileCard from "../../components/ProfileCard";
import Row from "../../components/Row";
import Achievement from "../../components/Achievement";
import Col from "../../components/Col";
import AboutMe from "../../components/AboutMe";
import API from "../../utils/API";

class Profile extends Component {

    state = {
        id: "5d12ce6ae4c8178bf200d4b5",
        profile: {},
        goals: []
      };

    componentDidMount() {
        this.getProfile();
        this.getGoals();
      }

    getProfile = () => {
        API.getProfile(this.state.id)
          .then(res =>{console.log (res.data)
            this.setState({
              profile: res.data
            })}
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
    

    render() {
        return (
            <div>
                <Nav />
                <br></br><br></br>
                <Row>
                    <Col size="md-4">
                        <Row>
                            <ProfileCard name={this.state.profile.name}/>
                        </Row>
                        <Row>
                            <Achievement />
                        </Row>
                    </Col>
                    <div className="col-md-8">
                        <div className="h-100">
                                <AboutMe />
                        </div>
                    </div>
                </Row>
                <br></br><br></br><br></br>
                <Row>
                    <Row>
                        <h1 className="text-center">My Goals</h1>
                    </Row>
                    <Col size="md-6">
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
                

                </Row>
            </div>
        );
    }
}

export default Profile;
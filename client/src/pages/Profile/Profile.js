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
        id: "",
        profile: {}
      };

    componentDidMount() {
        this.getProfile();
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

    render() {
        return (
            <div>
                <Nav />
                <br></br><br></br>
                <Row>
                    <Col size="md-4">
                        <Row>
                            <ProfileCard name="Username Placeholder"/>
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
                        <Row>
                            <GoalCard />
                        </Row>
                        <Row >
                            <GoalCard />
                        </Row>
                        <Row >
                            <GoalCard />
                        </Row>
                    </Col>
                    <Col size="md-6">
                        <Row>
                            <GoalCard />
                        </Row>
                        <Row >
                            <GoalCard />
                        </Row>
                        <Row >
                            <GoalCard />
                        </Row>
                    </Col>

                </Row>
            </div>
        );
    }
}

export default Profile;
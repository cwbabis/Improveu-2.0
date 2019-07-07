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
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.profileId,
            profile: {},
            goals: []
        };
    };

    componentWillMount() {
        this.getProfile();
    }
    componentDidMount() {
        this.getGoals();
    }

    getProfile = () => {
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
                            <ProfileCard name={this.state.profile.username ? this.state.profile.username : "Please Sign In or Register"}
                                image={this.state.profile.image ? this.state.profile.image : "https://www.orbistechnologies.com/wp-content/uploads/2018/12/profile-placeholder-image-gray-silhouette-no-vector-21542863-300x298.jpg"} />
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
                        <h1 className="text-center">Goals</h1>
                    </Row>
                    <Col size="md-12">
                        {this.state.goals.reverse().map(goal => (
                            <GoalCard
                                id={goal._id}
                                title={goal.title}
                                goal={goal.goal}
                                creator={goal.userName}
                                partner={goal.partnerID}
                                image={goal.image ? goal.image : "https://www.orbistechnologies.com/wp-content/uploads/2018/12/profile-placeholder-image-gray-silhouette-no-vector-21542863-300x298.jpg"}
                                handleBuddySubmit={this.handleBuddySubmit}
                            />
                        ))}
                    </Col>


                </Row>
            </div>
        );
    }
}

export default Profile;
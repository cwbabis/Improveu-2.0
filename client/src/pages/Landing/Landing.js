import React, { Component } from "react";
/* import "./App.css"; */
import LandingNav from "../../components/LandingNav";
import Row from "../../components/Row";
/* import Col from "./components/Col"; */
import Jumbotron from "../../components/jumbotron"
import SignIn from "../../components/SignIn";
import "./style.css";

const navStyling = {
width: '50%',
color: 'black'
}

class Landing extends Component {

    render() {
        return (
            <div>
                <LandingNav style="navStyling" />

                <div className="positioning">
                    <Row>
                        <Jumbotron />
                        <SignIn />
                    </Row>
                </div>

            </div>
        );
    }
}

export default Landing;
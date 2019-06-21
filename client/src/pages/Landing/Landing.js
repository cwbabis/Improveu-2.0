import React, { Component } from "react";
/* import "./App.css"; */
import Nav from "../../components/Nav";
import Row from "../../components/Row";
/* import Col from "./components/Col"; */
import Jumbotron from "../../components/jumbotron";
import SignIn from "../../components/SignIn";

class Landing extends Component {
    render() {
        return (
            <div>
                <Nav />
                <br></br><br></br>
                <Row>
                    <Jumbotron />
                    <SignIn/>
                </Row>
            </div>
        );
    }
}

export default Landing;
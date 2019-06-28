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

    constructor(props) {
        super(props);
        this.state = {
          newUser: {
            username: "",
            password: ""
          }
        };
    
        this.handleUserSubmit = this.handleUserSubmit.bind(this)
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handlePassChange = this.handlePassChange.bind(this)

      }
    
    
      handleNameChange(e) {
        console.log("Inside handleTextArea");
        let value = e.target.value;
        this.setState(
          prevState => ({
            newUser: {
              ...prevState.newUser,
              username: value
            }
          }
          ),
          () => {console.log(this.state.newUser)
          }
        );
      }

      handlePassChange(e) {
        console.log("Inside handleTextArea");
        let value = e.target.value;
        this.setState(
          prevState => ({
            newUser: {
              ...prevState.newUser,
              password: value
            }
          }
          ),
          () => {console.log(this.state.newUser)
          }
        );
      }
    
    
      //This creates on new goal and re-loads the goals page to display all goals including the newly created one
    
      handleUserSubmit = event => {
        event.preventDefault();
        let userData = this.state.newUser;
        console.log(userData);
/*         API.createNewGoal(userData)
          .then(res => console.log(res))
          .catch(err => console.log(err)); */
      };

    

    render() {
        return (
            <div>
                <LandingNav style="navStyling" />

                <div className="positioning">
                    <Row>
                        <Jumbotron />
                        <SignIn handleNameChange={this.handleNameChange}
                        handlePassChange={this.handlePassChange}
                        handleUserSubmit={this.handleUserSubmit}
                        name={this.state.newUser.username}
                        pass={this.state.newUser.password}/>
                    </Row>
                </div>

            </div>
        );
    }
}

export default Landing;
import React, { Component } from "react";
/* import "./App.css"; */
import LandingNav from "../../components/LandingNav";
import Row from "../../components/Row";
/* import Col from "./components/Col"; */
import Jumbotron from "../../components/jumbotron"
import SignIn from "../../components/SignIn";
import "./style.css";
import API from "../../utils/API";
import Footer from "../../components/Footer"
import Wrapper from "../../components/Wrapper"



class Landing extends Component {

  constructor(props) {
    super(props);
    this.state = {
      returnUser: {
        username: "",
        password: ""
      },
      newUser: {
        username: "",
        password: "",
        image: ""
      }
    };

    this.handleSignInSubmit = this.handleSignInSubmit.bind(this)
    this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this)
    this.handleSignInNameChange = this.handleSignInNameChange.bind(this)
    this.handleRegisterNameChange = this.handleRegisterNameChange.bind(this)
    this.handleSignInPassChange = this.handleSignInPassChange.bind(this)
    this.handleRegisterPassChange = this.handleRegisterPassChange.bind(this)
    this.handleRegisterEmailChange = this.handleRegisterEmailChange.bind(this)

  }


  handleSignInNameChange(e) {

    let name = e.target.value;
    this.setState(
      prevState => ({
        returnUser: {
          ...prevState.returnUser,
          username: name
        }
      }
      ),
      () => {
        console.log(this.state.returnUser)
      }
    );
  };

  handleRegisterNameChange(e) {
    console.log("Inside name form");
    let name = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          username: name
        }
      }
      ),
      () => {
        console.log(this.state.newUser)
      }
    );
  }

  handleSignInPassChange(e) {
    console.log("Inside pass form");
    let pass = e.target.value;
    this.setState(
      prevState => ({
        returnUser: {
          ...prevState.returnUser,
          password: pass
        }
      }
      ),
      () => {
        console.log(this.state.returnUser)
      }
    );
  }

  handleRegisterPassChange(e) {
    console.log("Inside pass form");
    let pass = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          password: pass
        }
      }
      ),
      () => {
        console.log(this.state.newUser)
      }
    );
  }

  handleRegisterEmailChange(e) {
    console.log("Inside pass form");
    let address = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          image: address
        }
      }
      ),
      () => {
        console.log(this.state.newUser)
      }
    );
  }


  //This creates on new goal and re-loads the goals page to display all goals including the newly created one

  handleSignInSubmit = event => {
    event.preventDefault();
    let userData = this.state.returnUser;
    console.log(userData);
    this.props.update(userData.username)
    
    API.logIn(userData)
      .then((res) => {
        console.log(res);

        this.props.history.push('/dashboard');
      })
      .catch(err => console.log(err));
  };

  handleRegisterSubmit = event => {
    event.preventDefault();
    let userData = this.state.newUser;
    console.log(userData);
    this.props.update(userData.username);
    API.createNewUser(userData)
    .then((res) => {
      console.log(res);
      this.props.history.push('/dashboard');
    })
      .catch(err => console.log(err));

  };



  render() {
    return (
      <div>
        <Wrapper />
        <Row>
          <LandingNav />
        </Row>
        <div className="positioning leftHalf">
          <Row>
            <Jumbotron />
            <SignIn handleSignInNameChange={this.handleSignInNameChange}
              handleRegisterNameChange={this.handleRegisterNameChange}
              handleSignInPassChange={this.handleSignInPassChange}
              handleRegisterPassChange={this.handleRegisterPassChange}
              handleRegisterEmailChange={this.handleRegisterEmailChange}
              handleSignInSubmit={this.handleSignInSubmit}
              handleRegisterSubmit={this.handleRegisterSubmit}
              signInName={this.state.returnUser.username}
              registerName={this.state.newUser.username}
              signInPass={this.state.returnUser.password}
              registerPass={this.state.newUser.password}
              registerEmail={this.state.newUser.email} />
          </Row>
        </div>

        <Footer />
        <Wrapper />
      </div>


    );
  }
}

export default Landing;
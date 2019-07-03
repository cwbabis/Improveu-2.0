import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Landing from "./pages/Landing";
import Profile from "./pages/Profile";
/* import Footer from "./components/Footer"; */

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      profileId: "5d1c0535d9496dcf1447a8f3"
    }
    this.update = this.update.bind(this);
  }

  update = id => {
    this.setState({ profileId: id });
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" render={(routeProps) => (
            <Landing {...routeProps} {...this.state} update={this.update} />
          )} />
          <Route exact path="/profile" render={(routeProps) => (
            <Profile {...routeProps} {...this.state} update={this.update} />
          )} />
          <Route exact path="/dashboard" render={(routeProps) => (
            <Dashboard {...routeProps} {...this.state} update={this.update} />
          )} />
          {/*   <Footer /> */}
        </div>
      </Router>
    );
  }
}

export default App;

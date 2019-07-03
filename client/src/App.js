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
      profileId: "test"
    }
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" profileId={this.state.profileId} component={Landing} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/dashboard" component={Dashboard} />
          {/*   <Footer /> */}
        </div>
      </Router>
    );
  }
}

export default App;

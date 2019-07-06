import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Landing from "./pages/Landing";
import Profile from "./pages/Profile";
import Comment from "./pages/Comments";
/* import Footer from "./components/Footer"; */

function App() {
  return (
    <Router>
      <div>
          <Route exact path="/" component={Landing} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/comment" component={Comment} />
      {/*   <Footer /> */}
      </div>
    </Router>
  );
}

export default App;

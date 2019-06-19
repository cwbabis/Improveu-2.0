import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Landing from "./pages/Landing";
import Profile from "./pages/Profile";
import Nav from "./components/Nav";
/* import Footer from "./components/Footer"; */

function App() {
  return (
    <Router>
      <div>
        <Nav/>
        
          <Route exact path="/" component={Landing} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/dashboard" component={Dashboard} />
        
      {/*   <Footer /> */}
      </div>
    </Router>
  );
}

export default App;

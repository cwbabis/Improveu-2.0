<<<<<<< HEAD
import React, { Component } from "react";
import "./App.css";
import Card from "./components/Goal Card";
import Nav from "./components/Nav";
import UserCard from "./components/User Card";
import Row from "./components/Row";
import Col from "./components/Col";
import Achievement from "./components/Achievement"
=======
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Landing from "./pages/Landing";
import Profile from "./pages/Profile";
/* import Footer from "./components/Footer"; */
>>>>>>> c8365fd043036c549afafb7c3030bdf663a0c2e7

function App() {
  return (
    <Router>
      <div>
<<<<<<< HEAD
        <Nav />
        <br></br><br></br>
        <Row>
          <UserCard />
          <Card />
          <Achievement />
        </Row>
=======
          <Route exact path="/" component={Landing} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/dashboard" component={Dashboard} />
      {/*   <Footer /> */}
>>>>>>> c8365fd043036c549afafb7c3030bdf663a0c2e7
      </div>
    </Router>
  );
}

export default App;

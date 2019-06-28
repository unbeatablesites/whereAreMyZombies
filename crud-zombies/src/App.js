import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <h2>Where are my zombies</h2>
        </div>
        <Route path="/" exact component={ZombieList} />
        <Route path="/edit/:id" component={EditZombie} />
      </Router>
    );
  }
}

export default App;

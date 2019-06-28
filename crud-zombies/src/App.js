import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import CreateZombie from "./components/create-zombie.component";
import EditZombie from "./components/edit-zombie.component";
import ZombieList from "./components/zombie-list.component";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <h2>Where are my zombies</h2>
          <Route path="/" exact component={ZombieList} />
          <Route path="/edit/:id" component={EditZombie} />
          <Route path="/create" component={CreateZombie} />
        </div>
      </Router>
    );
  }
}

export default App;

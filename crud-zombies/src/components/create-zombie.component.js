import React, { Component } from "react";

export default class CreateZombie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      zombie_description: "",
      zombie_responsible: "",
      zombie_building: "",
      zombie_alive: false
    };
  }

  onChangeZombieDescription(e) {
    this.setState({
      zombie_description: e.target.value
    });
  }

  onChangeZombieResponsible(e) {
    this.setState({
      zombie_responsible: e.target.value
    });
  }

  onChangeZombieBuilding(e) {
    this.setState({
      zombie_building: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({
      zombie_description: "",
      zombie_responsible: "",
      zombie_building: "",
      zombie_alive: false
    });
  }

  render() {
    return (
      <div>
        <p>Here we can create zombies!</p>
      </div>
    );
  }
}

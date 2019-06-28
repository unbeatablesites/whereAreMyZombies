import React, { Component } from "react";

export default class CreateZombie extends Component {
  constructor(props) {
    super(props);

    this.onChangeZombieDescription = this.onChangeZombieDescription.bind(this);
    this.onChangeZombieResponsible = this.onChangeZombieResponsible.bind(this);
    this.onChangeZombieBuilding = this.onChangeZombieBuilding.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

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
    console.log("Form Submitted");
    console.log(`Zombie Description: ${this.state.zombie_description}`);
    console.log(
      `Who is responsible for getting this Zombie: ${
        this.state.zombie_responsible
      }`
    );
    console.log(
      `What building is this zombie in ${this.state.zombie_building}`
    );
    console.log(`Is This zombie alive: ${this.state.zombie_alive}`);
    this.setState({
      zombie_description: "",
      zombie_responsible: "",
      zombie_building: "",
      zombie_alive: false
    });
  }

  render() {
    return (
      <div style={{ marginTop: 20 }}>
        <h3>Add a Zombie</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label type="text">Description:</label>
            <input
              type="text"
              className="form-control"
              value={this.state.zombie_description}
              onChange={this.onChangeZombieDescription}
            />
          </div>
        </form>
      </div>
    );
  }
}

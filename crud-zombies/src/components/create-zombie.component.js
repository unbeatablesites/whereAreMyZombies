import React, { Component } from 'react';
import axios from 'axios';

export default class CreateZombie extends Component {
  constructor(props) {
    super(props);

    this.onChangeZombieDescription = this.onChangeZombieDescription.bind(this);
    this.onChangeZombieResponsible = this.onChangeZombieResponsible.bind(this);
    this.onChangeZombieBuilding = this.onChangeZombieBuilding.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      zombie_description: '',
      zombie_responsible: '',
      zombie_building: '',
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
    console.log('Form Submitted');
    console.log(`Zombie Description: ${this.state.zombie_description}`);
    console.log(
      `Who is responsible for getting this Zombie: ${
        this.state.zombie_responsible
      }`
    );
    console.log(
      `What building is this zombie in ${this.state.zombie_building}`
    );

    const newZombie = {
      zombie_description: this.state.zombie_description,
      zombie_responsible: this.state.zombie_responsible,
      zombie_building: this.state.zombie_building,
      zombie_alive: this.state.zombie_alive
    };

    axios
      .post('http://localhost:4000/zombies/add', newZombie)
      .then(res => console.log(res.data));

    this.setState({
      zombie_description: '',
      zombie_responsible: '',
      zombie_building: '',
      zombie_alive: false
    });
  }

  render() {
    return (
      <div style={{ marginTop: 20 }}>
        <h3>Add a new Zombie!</h3>
        <form onSubmit={this.onSubmit}>
          <div className='form-group'>
            <label>What should we call this zombie:</label>
            <input
              type='text'
              className='form-control'
              value={this.state.zombie_description}
              onChange={this.onChangeZombieDescription}
            />
          </div>

          <div className='form-group'>
            <label>Who is responsible for capturing this Zombie:</label>
            <input
              type='text'
              className='form-control'
              value={this.state.zombie_responsible}
              onChange={this.onChangeZombieResponsible}
            />
          </div>

          <div className='form-group'>
            <label>What building shall we put this Zombie into:</label>

            <div className='form-check form-check-inline'>
              <input
                className='from-check-input'
                type='radio'
                name='buildingOptions'
                id='buildingh'
                value='Hospital'
                checked={this.state.zombie_building === 'Hospital'}
                onChange={this.onChangeZombieBuilding}
              />
              <label className='form-check-label'> Hospital</label>
            </div>
            <div className='form-check form-check-inline'>
              <input
                className='from-check-input'
                type='radio'
                name='buildingOptions'
                id='buildings'
                value='School'
                checked={this.state.zombie_building === 'School'}
                onChange={this.onChangeZombieBuilding}
              />
              <label className='form-check-label'> School</label>
            </div>
            <div className='form-check form-check-inline'>
              <input
                className='from-check-input'
                type='radio'
                name='buildingOptions'
                id='buildingw'
                value='Warehouse'
                checked={this.state.zombie_building === 'Warehouse'}
                onChange={this.onChangeZombieBuilding}
              />
              <label className='form-check-label'> Warehouse</label>
            </div>
          </div>
          <div className='form-group'>
            <input
              type='submit'
              value='Create Zombie'
              className='btn btn-primary'
            />
          </div>
        </form>
      </div>
    );
  }
}

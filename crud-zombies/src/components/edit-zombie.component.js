import React, { Component } from 'react';
import axios from 'axios';

export default class EditZombie extends Component {
  constructor(props) {
    super(props);

    this.onChangeZombieDescription = this.onChangeZombieDescription.bind(this);
    this.onChangeZombieResponsible = this.onChangeZombieResponsible.bind(this);
    this.onChangeZombieBuilding = this.onChangeZombieBuilding.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      zombie_description: '',
      zombie_responsible: '',
      zombie_building: ''
    };
  }

  componentDidMount() {
    axios
      .get('zombies/' + this.props.match.params.id)
      .then(response => {
        this.setState({
          zombie_description: response.data.zombie_description,
          zombie_responsible: response.data.zombie_responsible,
          zombie_building: response.data.zombie_building
        });
      })
      .catch(function(error) {
        console.log(error);
      });
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
    const obj = {
      zombie_description: this.state.zombie_description,
      zombie_responsible: this.state.zombie_responsible,
      zombie_building: this.state.zombie_building
    };

    console.log(obj);
    axios
      .post('zombies/update/' + this.props.match.params.id, obj)
      .then(res => console.log(res.data));

    this.props.history.push('/');
  }
  render() {
    return (
      <div>
        <h3>Edit atributes of Zombie</h3>
        <form onSubmit={this.onSubmit}>
          <div className='form-group'>
            <label>Description: </label>
            <input
              type='text'
              className='form-control'
              value={this.state.zombie_description}
              onChange={this.onChangeZombieDescription}
            />
          </div>
          <div className='form-group'>
            <label>Responsible: </label>
            <input
              type='text'
              className='form-control'
              value={this.state.zombie_responsible}
              onChange={this.onChangeZombieResponsible}
            />
          </div>
          <div className='form-group'>
            <label>What building shall we put this Zombie into: </label>
            <br />

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
              <label className='form-check-label'>Hospital</label>
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
              <label className='form-check-label'>Warehouse </label>
            </div>
            <br />
            <div form-group>
              <input
                type='submit'
                value='Update Zombie Page'
                className='btn btn-primary'
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

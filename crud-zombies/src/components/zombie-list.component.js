import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Zombie = props => (
  <tr>
    <td className={props.zombie.zombie_died ? 'died' : ''}>
      {props.zombie.zombie_description}
    </td>
    <td className={props.zombie.zombie_died ? 'died' : ''}>
      {props.zombie.zombie_responsible}
    </td>
    <td className={props.zombie.zombie_died ? 'died' : ''}>
      {props.zombie.zombie_building}
    </td>
    <td>
      <Link to={'/edit/' + props.zombie._id}> Edit</Link>
    </td>
  </tr>
);

export default class ZombieList extends Component {
  constructor(props) {
    super(props);
    this.state = { zombies: [] };
  }

  componentDidMount() {
    axios
      .get('http://localhost:4000/zombies/')
      .then(response => {
        this.setState({ zombies: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  componentDidUpdate() {
    axios
      .get('http://localhost:4000/zombies/')
      .then(response => {
        this.setState({ zombies: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  zombieList() {
    return this.state.zombies.map(function(currentZombie, i) {
      return <Zombie zombie={currentZombie} key={i} />;
    });
  }

  render() {
    return (
      <div>
        <h3>Captured Zombies</h3>
        <table className='table table-striped' style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Description of zombie</th>
              <th> Who caught this zombie</th>
              <th>What building should we put the zombie in</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.zombieList()}</tbody>
        </table>
      </div>
    );
  }
}

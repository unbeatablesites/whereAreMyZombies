import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateZombie from './components/create-zombie.component';
import EditZombie from './components/edit-zombie.component';
import ZombieList from './components/zombie-list.component';
import logo from './logo.png';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <a
              className='navbar-brand'
              href='https://frankuzoka.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                src={logo}
                width='30'
                height='30'
                alt='World 50 zombie app :)'
              />
            </a>
            <Link to='/' className='nav-brand'>
              Where Are My Zombies App
            </Link>
            <div className='collpase nav-collapse'>
              <ul className='navbar-nav mr-auto'>
                <li className='navbar-item'>
                  <Link to='/' className='nav-link'>
                    All Zombies
                  </Link>
                </li>
                <li className='navbar-item'>
                  <Link to='/create' className='nav-link'>
                    Add Zombies
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <Route path='/' exact component={ZombieList} />
          <Route path='/edit/:id' component={EditZombie} />
          <Route path='/create' component={CreateZombie} />
        </div>
      </Router>
    );
  }
}

export default App;

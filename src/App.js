import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Navbar, Nav, NavItem, Form, FormControl, Button } from 'react-bootstrap';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
// import './styles/CustomNavbar.css';

import Home from './screens/Home';
import Error from './screens/Error';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route component={Error}/>
          </Switch>

        </div>

      </BrowserRouter>
    );
  }
}

export default App;

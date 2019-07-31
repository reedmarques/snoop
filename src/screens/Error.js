import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { BrowserRouter, Route } from 'react-router-dom';
import logo from '../logo.svg';
import '../App.css';

export default class Error extends Component {

  state = {
  }

  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <h1 className="App-title">
            Zipline
          </h1>
        </header> */}
        <h1>This page does not exist!</h1>

      </div>
    );
  }
}

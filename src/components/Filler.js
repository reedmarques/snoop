import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { BrowserRouter, Route } from 'react-router-dom';
import '../styles/ProgressBar.css';

export default class Filler extends Component {

  state = {
    snoop: 0,
    poop: 100,
  }

  render() {
    return (
      <div className="filler" style={{width: `${this.props.percentage}%`}}/>
    );
  }
}

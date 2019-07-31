import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { BrowserRouter, Route } from 'react-router-dom';
import Filler from './Filler';
import '../styles/ProgressBar.css';


export default class ProgressBar extends Component {


  render() {
    return (
      <div className="progress-bar">
        <Filler percentage={this.props.percentage}/>
      </div>
    );
  }
}

import React, { Component } from 'react';
import { Button, Container, Row, Col, Image } from 'react-bootstrap';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import logo from '../logo.svg';
import '../styles/Home.css';

export default class Home extends Component {



  state = {
    currentStreak: 0,
    highScore: 0,
    targetIndex: 0,
    show1: false,
    show2: false,
    show3: false,
    lock: false,
    correct: false,
  }

  componentDidMount() {
    this.assignTargetIndex()
  }

  // Random index generator
  assignTargetIndex() {
    const random = this.getRandomInt(3)
    this.setState({ targetIndex: random})
  }
  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  //

  click(value) {
    if (this.state.lock) {
      return
    }
    var currentStreak;
    var timeoutLength;
    if (value == this.state.targetIndex) {
      // win
      timeoutLength = 5000;
      const lock = true;
      const correct = true;
      this.setState({ lock, correct })

      // add to streak
      currentStreak = this.state.currentStreak + 1;
      // change picture accordingly

    } else {
      // lose, reset streak
      currentStreak = 0;
      timeoutLength = 2000;
      const lock = true;
      this.setState({ lock })
    }
    // show one cup every time
    if (value == 0) {
      this.setState({ show1: true })
    } else if (value == 1) {
      this.setState({ show2: true })
    } else {
      this.setState({ show3: true })
    }

    this.setState({ currentStreak })

    if (currentStreak > this.state.highScore) {
      const highScore = this.state.highScore + 1
      this.setState({ highScore })
    }

    this.assignTargetIndex()

    setTimeout(() => {
      this.resetValues()
    }, timeoutLength);

  }

  resetValues() {
    const show1 = false;
    const show2 = false;
    const show3 = false;
    const lock = false;
    const correct = false;
    this.setState({ show1, show2, show3, lock, correct })

  }

  render() {
    var image;
    if (this.state.correct) {
      image = <img src={require('../images/snoop.jpg')} />
    } else {
      image = <img className="img" src={require('../images/dog.jpg')} />
    }

    return (
      <div className="home">
        <h2 className="h2">Snoop Dog or Poop dog</h2>
        <p style={{marginTop:-50, paddingBottom:50, marginLeft: 24}}>Lets get it</p>
        <div className="gameContainer">
          <div className="imageContainer"
            style={{
              display:"flex", flexDirection:"row", justifyContent:'space-between', alignItems:'center',
              paddingLeft: 200, paddingRight: 200
            }}
            >
            {this.state.show1 ? image : <img src={require("../images/cup.png")} onClick={() => this.click(0)}/>}
            {this.state.show2 ? image : <img src={require("../images/cup.png")} onClick={() => this.click(1)}/>}
            {this.state.show3 ? image : <img src={require("../images/cup.png")} onClick={() => this.click(2)}/>}
          </div>
          <div className="imageContainer2" style={{
            justifyContent: 'center', alignItems: 'center', display:'flex'
          }}>
            <p style={{paddingRight: 64, fontFamily: 'Roboto', fontSize:30}}>Current Streak: {this.state.currentStreak}</p>
            <p style={{paddingLeft: 64, fontFamily: 'Roboto', fontSize:30, color: 'red'}}>High Score: {this.state.highScore}</p>
          </div>

        </div>
      </div>
    );
  }
}

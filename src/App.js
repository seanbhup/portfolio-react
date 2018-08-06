import React, { Component } from 'react';
import logo from './Pacman.svg';
import jinyang from './jinyang.png'
import './App.css';
import Typist from 'react-typist';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>


        </header>
        <Typist className="App-title">
            <span>I love you</span>
            <Typist.Backspace count={10} delay={3000}/>
            <span>Under Construction</span>
        </Typist>
        <img src={jinyang} className="jinyang"/>
      </div>
    );
  }
}

export default App;

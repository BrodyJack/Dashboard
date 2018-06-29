import React, { Component } from 'react';
import Terminal from './Terminal.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    messages: []
  };

  addText = event => {
    if (event.key === 'Enter') {
      this.setState({
        text: this.state.messages.push('>  ' + event.target.value)
      });
      event.target.value = '';
    }
  };

  render() {
    //fetch('/test');

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Terminal messages={this.state.messages} addText={this.addText} />
      </div>
    );
  }
}

export default App;

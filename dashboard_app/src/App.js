import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    messages: ['Welcome to the meme... type a message to meme.....']
  };

  addText = event => {
    if (event.key === 'Enter') {
      this.setState({
        text: this.state.messages.push('>  ' + event.target.value)
      });
      event.target.value = '';
    }
  };

  displayMessage = (message, index) => {
    return <li key={index}>{message}</li>;
  };
  render() {
    fetch('/test');

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="terminalDiv">
          <ul className="terminalList">
            {this.state.messages.map(this.displayMessage)}
          </ul>
        </div>
        <span className="terminalInput">
          > <input className="terminalInput" onKeyPress={this.addText} />
        </span>
      </div>
    );
  }
}

export default App;

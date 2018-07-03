import React, { Component } from 'react';
import Terminal from './Terminal.js';
import socketIOClient from 'socket.io-client';
import './App.css';

class TextAdventure extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      socket: socketIOClient(),
      waiting: false
    };

    this.state.socket.on('server message', message => {
      this.setState({
        text: this.state.messages.push('SERVER: ' + message),
        waiting: false
      });
    });
  }

  componentDidUpdate() {
    var messageList = document.getElementById('messageList');
    if (messageList != null) {
      messageList.scrollTop = messageList.scrollHeight;
    }
  }

  componentWillUnmount() {
    this.state.socket.disconnect();
  }

  addText = event => {
    if (event.key === 'Enter') {
      this.setState({
        messages: this.state.messages.concat('>  ' + event.target.value)
      });
      this.state.socket.emit('message entered', event.target.value);
      this.setState({
        waiting: true
      });
      event.target.value = '';
    }
  };

  render() {
    return (
      <Terminal
        messages={this.state.messages}
        addText={this.addText}
        disabled={this.state.waiting}
      />
    );
  }
}

export default TextAdventure;

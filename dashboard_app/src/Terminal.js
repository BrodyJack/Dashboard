import React from 'react';

function displayMessage(message, index) {
  return <li key={index}>{message}</li>;
}

export default function Terminal(props) {
  return (
    <div>
      <div className="terminalDiv">
        <ul id="messageList" className="terminalList">
          {props.messages.map(displayMessage)}
        </ul>
      </div>
      <span className="terminalInput">
        > <input className="terminalInput" onKeyPress={props.addText} />
      </span>
    </div>
  );
}

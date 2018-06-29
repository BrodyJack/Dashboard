import React from 'react';

function displayMessage(message, index) {
  return <li key={index}>{message}</li>;
}

function focusInput() {
  document.getElementById('textInput').focus();
}

export default function Terminal(props) {
  return (
    <div>
      <div className="terminalDiv" onClick={focusInput}>
        <ul id="messageList" className="terminalList">
          {props.messages.map(displayMessage)}
        </ul>
      </div>
      <span className="terminalInput">
        >{' '}
        <input
          id="textInput"
          className="terminalInput"
          onKeyPress={props.addText}
        />
      </span>
    </div>
  );
}

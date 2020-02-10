import React from 'react';
import './index.css';

function countChars() {
  const x = document.getElementById('textbox');
  return `${100 - x} Characters left`;
}

function TextBox() {
  return (
    <div className="TextBox">
      <textarea id="textbox" rows="6" cols="50" onKeyUp="countChars()" />
      <p>{countChars()}</p>
    </div>
  );
}

export default TextBox;

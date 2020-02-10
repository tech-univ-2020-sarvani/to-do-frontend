import React from 'react';
import TextBox from '../../components/TextBox';
import Button from '../../components/Button';
import './index.css';

function TextBoxBar() {
  return (
    <div className="TestBoxBar">
      <h2>CREATE TO-DO</h2>
      <TextBox />
      <br />
      <Button buttonName="SUBMIT" />
    </div>
  );
}

export default TextBoxBar;

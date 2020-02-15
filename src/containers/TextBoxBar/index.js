import React, { useState } from 'react';

import PropTypes from 'prop-types';
import TextBox from '../../components/TextBox';
import Button from '../../components/Button';
import './index.css';

function TextBoxBar(props) {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  const { buttonClick } = props;

  const changeText = (e) => {
    setText(e);
    setCount(count + 1);
  };
  return (
    <div className="TextBoxBar">
      <h2>CREATE TO-DO</h2>
      <TextBox charCount={count} changeText={(e) => changeText(e)} />
      <br />
      <Button buttonClick={buttonClick} path="/">SUBMIT</Button>
    </div>
  );
}
TextBoxBar.propTypes = {
  buttonClick: PropTypes.func.isRequired,
};
export default TextBoxBar;

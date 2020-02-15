import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

function TextBox(props) {
  const { charCount, changeText } = props;
  return (
    <div className="TextBox">
      <textarea id="textbox" rows="6" cols="50" onChange={(e) => changeText(e.target.value)} />
      <br />
      Characters left:
      {' '}
      {charCount}
      /100
    </div>
  );
}
TextBox.propTypes = {
  charCount: PropTypes.string.isRequired,
  changeText: PropTypes.func.isRequired,
};
export default TextBox;

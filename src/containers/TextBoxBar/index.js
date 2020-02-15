import React from 'react';
import PropTypes from 'prop-types';
import TextBox from '../../components/TextBox';
import Button from '../../components/Button';
import './index.css';


function TextBoxBar(props) {
  const { buttonClick } = props;
  return (
    <div className="TextBoxBar">
      <h2>CREATE TO-DO</h2>
      <TextBox />
      <br />
      {/* use padding */}
      <Button buttonName="SUBMIT" buttonClick={buttonClick} link="/" />
    </div>
  );
}

TextBoxBar.propTypes = {
  buttonClick: PropTypes.func.isRequired,
};
export default TextBoxBar;

import React from 'react';
import './index.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Button(props) {
  const { buttonName, buttonClick, link } = props;
  return (
    <div className="Button">
      <Link to={link}>
        <button type="button" onClick={buttonClick}>{buttonName}</button>
      </Link>
    </div>
  );
}

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  buttonClick: PropTypes.func.isRequired,
  link: PropTypes.string.isRequired,
};

export default Button;

/* eslint-disable react/require-default-props */
import React from 'react';
import './index.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Button(props) {
  const { children, buttonClick, path } = props;
  return (
    <div className="Button">
      <Link to={path}>
        <button type="button" onClick={buttonClick}>{children}</button>
      </Link>
    </div>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  buttonClick: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired,
};

export default Button;

import React from 'react';
import './index.css';
import PropTypes from 'prop-types';

function Button(props) {
  const { buttonName } = props;
  return (
    <div className="Button">
      <button type="button">{buttonName}</button>
    </div>
  );
}

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
};

export default Button;

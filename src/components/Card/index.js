import React from 'react';
import './index.css';
import PropTypes from 'prop-types';

function Card(props) {
  const { text } = props;
  return (
    <div className="card">
      <p>{text}</p>
      <button type="button">DONE</button>
    </div>
  );
}
Card.propTypes = {
  text: PropTypes.string.isRequired,
};
export default Card;

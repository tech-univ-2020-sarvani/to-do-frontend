import React from 'react';
import './index.css';
import PropTypes from 'prop-types';

function Card(props) {
  const { todos, onClickDone } = props;
  return (
    <div className="card">
      <p>{todos.title}</p>
      <button type="button" onClick={() => onClickDone(todos.id)}>DONE</button>
    </div>
  );
}
Card.propTypes = {
  todos: PropTypes.objectOf(PropTypes.string).isRequired,
  onClickDone: PropTypes.func.isRequired,
};
export default Card;

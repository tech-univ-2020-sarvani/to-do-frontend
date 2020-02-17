import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Card(props) {
  const { todo, onClickDone } = props;
  const path = `/view?noteID=${todo.id}`;
  return (
    <div className="card">
      <Link to={path}>
        <p>{todo.title}</p>
      </Link>
      <button type="button" onClick={() => onClickDone(todo.id)}>DONE</button>
    </div>
  );
}
Card.propTypes = {
  todo: PropTypes.objectOf(PropTypes.string).isRequired,
  onClickDone: PropTypes.func.isRequired,
};
export default Card;

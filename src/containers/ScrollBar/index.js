import React from 'react';
import PropTypes from 'prop-types';
import Card from '../../components/Card';
import './index.css';

function ScrollBar(props) {
  const { todos, onClickDone } = props;

  const todoList = todos.map((value) => (
    <Card
      todos={value}
      onClickDone={(id) => onClickDone(id)}
    />
  ));
  return (
    <div className="ScrollBar">
      {todoList}
    </div>
  );
}
ScrollBar.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onClickDone: PropTypes.func.isRequired,
};
export default ScrollBar;

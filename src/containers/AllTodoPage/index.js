import React from 'react';
import PropTypes from 'prop-types';
import ProfileBar from '../ProfileBar';
import TodoList from '../TodoList';
import './index.css';

function AllTodoPage(props) {
  const { todos, onClickDone } = props;
  return (
    <div className="AllTodo">
      <ProfileBar />
      <TodoList todos={todos} onClickDone={(text) => onClickDone(text)} />
    </div>
  );
}
AllTodoPage.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onClickDone: PropTypes.func.isRequired,
};
export default AllTodoPage;

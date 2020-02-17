/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { useLocation, useHistory, Redirect } from 'react-router-dom';
// import ProfileBar from '../ProfileBar';
import './index.css';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
function CreateTodo(props) {
  const { todos, listLoadComplete } = props;
  console.log(todos);
  const history = useHistory();
  const query = useQuery();
  const noteId = query.get('noteID');
  const todoView = todos.filter((todo) => todo.id === noteId);
  console.log(todoView);
  if (listLoadComplete === null) {
    return (
      <div>
        Loading...
      </div>
    );
  }

  return (
    todoView.length !== 0
      ? (
        <div className="CreateTodo">
          {todoView[0].id}
          <br />
          {todoView[0].title}
          <br />
          {todoView[0].description}
          <br />
          <button type="button" onClick={history.push('/new')}>LIST</button>
        </div>
      )
      : <Redirect to="/" />
  );
}
CreateTodo.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  listLoadComplete: PropTypes.bool.isRequired,
};
export default CreateTodo;

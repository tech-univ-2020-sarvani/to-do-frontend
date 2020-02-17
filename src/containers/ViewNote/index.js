/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
// import ProfileBar from '../ProfileBar';
import './index.css';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
function CreateTodo(props) {
  const { todos } = props;
  console.log(todos);
  // const history = useHistory();
  const query = useQuery();
  const noteId = query.get('noteID');
  const todoView = todos.filter((todo) => todo.id === noteId);
  console.log(todoView);
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
          {/* <button type="button" onClick={history.push('/new')}>LIST</button> */}
        </div>
      )
      : <div />
  );
}
CreateTodo.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
export default CreateTodo;

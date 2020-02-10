import React from 'react';
import ProfileBar from '../ProfileBar';
import TodoList from '../TodoList';
import './index.css';

function AllTodoPage() {
  return (
    <div className="ALLTodo">
      <ProfileBar />
      <TodoList />
    </div>
  );
}

export default AllTodoPage;

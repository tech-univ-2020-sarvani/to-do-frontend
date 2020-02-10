import React from 'react';
import ScrollBar from '../ScrollBar';
import Button from '../../components/Button';
import './index.css';

function TodoList() {
  return (
    <div className="list">
      <h2>ALL TO-DOS</h2>
      <ScrollBar />
      <Button buttonName="CREATE NEW" />
    </div>
  );
}

export default TodoList;

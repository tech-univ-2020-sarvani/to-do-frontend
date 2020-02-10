import React from 'react';
import PropTypes from 'prop-types';
import ScrollBar from '../ScrollBar';
import Button from '../../components/Button';
import './index.css';

function TodoList(props) {
  const { buttonClick, todos, onClickDone } = props;
  return (
    <div className="list">
      <h2 className="text">ALL TO-DOS</h2>
      <ScrollBar todos={todos} onClickDone={(text) => onClickDone(text)} />
      <Button buttonName="CREATE NEW" buttonClick={buttonClick} />
    </div>
  );
}

TodoList.propTypes = {
  buttonClick: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onClickDone: PropTypes.func.isRequired,
};
export default TodoList;

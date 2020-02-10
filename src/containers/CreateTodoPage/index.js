import React from 'react';
import PropTypes from 'prop-types';
import './index.css';
import TextBoxBar from '../TextBoxBar';
import ProfileBar from '../ProfileBar';

function CreateTodo(props) {
  const { buttonClick } = props;
  return (
    <div className="CreateTodo">
      <ProfileBar />
      <TextBoxBar buttonClick={buttonClick} />
    </div>
  );
}
CreateTodo.propTypes = {
  buttonClick: PropTypes.func.isRequired,
};
export default CreateTodo;

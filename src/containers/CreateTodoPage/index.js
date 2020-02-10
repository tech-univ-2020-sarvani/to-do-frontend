import React from 'react';
import './index.css';
import TextBoxBar from '../TextBoxBar';
import ProfileBar from '../ProfileBar';

function CreateTodo() {
  return (
    <div className="CreateTodo">
      <ProfileBar />
      <TextBoxBar />
    </div>
  );
}

export default CreateTodo;

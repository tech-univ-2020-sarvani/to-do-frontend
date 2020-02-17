/* eslint-disable react/sort-comp */
import React from 'react';
import './App.css';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import AllTodoPage from './containers/AllTodoPage';
import CreateTodoPage from './containers/CreateTodoPage';
import useInput from './hooks/useInput';
import ViewNote from './containers/ViewNote';

const App = () => {
  const [todo, setTodo] = useInput([]);

  const updateTodos = async () => {
    const todoNew = document.getElementById('textbox').value;
    const newTodo = {
      title: todoNew,
      description: todoNew,
    };
    const note = await axios.post('http://localhost:8080/notes', newTodo);
    const noteData = note.data;
    setTodo([...todo, noteData]);
  };

  const onClickDone = async (id) => {
    await axios({
      method: 'DELETE',
      url: `http://localhost:8080/notes/${id}`,
    });
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/new">
          <CreateTodoPage buttonClick={updateTodos} />
        </Route>
        <Route exact path="/view">
          <ViewNote todos={todo} />
        </Route>
        <Route path="*">
          <AllTodoPage todos={todo} onClickDone={(text) => onClickDone(text)} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;

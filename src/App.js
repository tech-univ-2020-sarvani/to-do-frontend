/* eslint-disable react/sort-comp */
import React from 'react';
import './App.css';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from 'react-router-dom';
import AllTodoPage from './containers/AllTodoPage';
import CreateTodoPage from './containers/CreateTodoPage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCreated: false,
      todos: [],
    };
  }

  createNew = () => {
    this.setState({
      ...this.state,
      isCreated: true,
    });
  }

  getTodos = async () => {
    const todoData = await axios.get('http://localhost:8080/notes');
    const notes = todoData.data;
    console.log(notes);
    this.setState({
      todos: [...notes],
    });
  }

  componentDidMount() {
    console.log('ComponentDidMount');
    this.getTodos();
  }


  updateTodos =async () => {
    const { todos } = this.state;
    const todo = document.getElementById('textbox').value;
    const newTodo = {
      title: todo,
      description: todo,
    };
    console.log(newTodo);
    const note = await axios.post('http://localhost:8080/notes', newTodo);
    const noteData = note.data;
    this.setState({
      todos: [noteData, ...todos],
      isCreated: false,
    });
  }

  onClickDone = async (id) => {
    await axios({
      method: 'DELETE',
      url: `http://localhost:8080/notes/${id}`,
    });
    this.getTodos();
  }

  render() {
    const { isCreated, todos } = this.state;
    return (
      <Router>
        <Switch>
          <Route path="/new">
            <CreateTodoPage buttonClick={this.updateTodos} />
          </Route>
          <Route path="/">
            <AllTodoPage buttonClick={this.createNew} todos={todos} onClickDone={(text) => this.onClickDone(text)} />
          </Route>
        </Switch>
      </Router>
    );
  }
}


export default App;

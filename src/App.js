import React from 'react';
import './App.css';
import AllTodoPage from './containers/AllTodoPage';
import CreateTodoPage from './containers/CreateTodoPage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCreated: false,
      todos: ['first note'],
    };
  }

  createNew = () => {
    this.setState({
      ...this.state,
      isCreated: true,
    });
  }

  updateTodos =() => {
    const { todos } = this.state;
    const todo = document.getElementById('textbox').value;
    this.setState({
      todos: [todo, ...todos],
      isCreated: false,
    });
  }

  onClickDone = (text) => {
    const { todos } = this.state;
    const index = todos.indexOf(text);
    todos.splice(index, 1);
    this.setState({
      todos: [...todos],
    });
  }

  render() {
    const { isCreated, todos } = this.state;
    return (
      !isCreated
        ? <AllTodoPage buttonClick={this.createNew} todos={todos} onClickDone={(text) => this.onClickDone(text)} />
        : <CreateTodoPage buttonClick={this.updateTodos} />
    );
  }
}


export default App;

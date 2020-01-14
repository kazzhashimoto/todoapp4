import React, {Component} from 'react';
import TodoForm from './components/TodoForms';
import TodoList from './components/TodoList';

class App extends Component {
  render(){
    return(
      <div>
        <TodoForm></TodoForm>
        <TodoList></TodoList>
      </div>
    );
  }
}

export default App;

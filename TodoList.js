import React,{Component} from 'react';

class TodoList extends Component{
  constructor(props){
    super(props);
    this.state={
      todos:[]
    };
  }

  componentDidMount(){
    const todos=JSON.parse(localStorage.getItem('todos'))||[];
    this.setState({todos:todos});
  }

  deleteTodo(i){
    const todos=this.state.todos;
    todos.splice(i,1);
    this.setState({todos:todos});
    localStorage.setItem('todos',JSON.stringify(this.state.todos));
  }

  render(){
    return(
      <div>
        <h5>Todo List3</h5>
          <ul>
            {
              this.state.todos.map((todo,i)=>{
                return(
                  <li key={i}>{todo}
                    <button onClick={this.deleteTodo.bind(this,i)}>DEL</button>
                  </li>
                )
              })
            }
          </ul>
      </div>
    );
  }
}

export default TodoList;
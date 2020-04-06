import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

// Data shape
const list = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = { list };
  }

  addTodo = (e, task) => {
    e.preventDefault();
    const newTask = {
      task: task,
      id: Date.now(),
      completed: false
    };
    this.setState({
      list: [...this.state.list, newTask]
    });
  };

  toggleTask = taskId => {
    console.log(taskId)
    this.setState({
      list: this.state.list.map(item => {
        if(taskId === list.id )
      })
    })
  }

  clearTasks = e => {
    e.preventDefault();
    // if task is completed (true) then filter it out
    this.setState({
      list: this.state.list.filter(task => !task.completed)
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList 
          list={this.state.list}
          toggleTask={this.toggleTask}
          clearTasks={this.clearTasks}
        />
        <TodoForm addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;
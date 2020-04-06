import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            task: ''
        }
    }
    // handles changes for input
    handleChanges = e => {
        // dynamically gets the name from the input and assigns it its value
        this.setState({ [e.target.name]: e.target.value })
    };

    // handle submittion of form
    submitHandler = e => {
        e.preventDefault();
        this.setState({ task: '' });
        this.props.addTodo(e, this.state.task);
    };
    clearHandler = e => {
        e.preventDefault();
        this.props.clearTasks(e);
    };
    render(){
        return (
            <>
            <form>
                <input
                    type='text'
                    value={this.state.task}
                    name='task'
                    onChange={this.handleChanges}
                />
                <button onClick={this.submitHandler}>Add Todo</button>
                <button onClick={this.clearHandler}>Clear Completed</button>
            </form>
            </>
        )
    }
}

export default TodoForm;
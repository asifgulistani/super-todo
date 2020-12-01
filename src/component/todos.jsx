import React, { Component } from 'react';
import { getTodos } from '../service/todoService';
import Add from './add';
import Todo from './todo';

class Todos extends Component {
    state = { 
        todos: [],
     }

    componentDidMount() {
        this.setState({
            todos: getTodos()
        })
    }
    handleAdd = todo => {
        console.log('added ', todo);
    }

    render() { 
        const { todos } = this.state;
        return ( 
            <div id="hero" className="hero">
                <h1 className="title">Super Todo</h1>
                <div id="todoApp" className="todo-app">
                <div id="todoMenu1" className="todo-menu-1">
                    <button id="toggleAll" className="toggle-all" aria-label="Toggle all to do tasks">
                    <span className="rotate">&#x276F;</span>
                    </button>
                    <Add onAdd={this.handleAdd}/>
                </div>
                <ul id="todos" className="todos" aria-label="List of to do tasks">
                    {todos.map(todo => <Todo key={todo._id} item={todo} />)}
                </ul>
                <div id="todoMenu2" className="todo-menu-2">
                    <label id="todosLeft" className="todos-left" aria-label="Number of to do tasks left to complete"></label>
                    <div id="todoMenu2Buttons" className="todo-menu-2-buttons">
                    <button id="showAllTodos" className="menu-2-button active" aria-label="Show all to do tasks">All</button>
                    <button id="showUncompletedTodos" className="menu-2-button" aria-label="Show active to do tasks">Active</button>
                    <button id="showCompletedTodos" className="menu-2-button" aria-label="Show completed to do tasks">Completed</button>
                    </div>
                    <button id="deleteCompletedButton" className="delete-completed-button" aria-label="Clear completed to do tasks">Clear completed</button>
                </div>
                </div>
            </div>
         );
    }
}
 
export default Todos;
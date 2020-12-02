import React, { Component } from 'react';
import { getTodos } from '../service/todoService';
import Add from './add';
import Filter from './filter';
import SelectAll from './selectAll';
import Todo from './todo';

class Todos extends Component {
    state = { 
        todos: [],
        filter: false,
     }

    componentDidMount() {
        this.setState({
            todos: getTodos()
        })
    }
    handleAdd = todo => {
        const {todos} = this.state;

        todos.push({
            _id: this.makeId(),
            title: todo,
            state: false
        });

        this.setState({todos});
    }

    handleSelectToggle = () => {

        const todos = this.state.todos.map(todo => {
            if (todo.state === false)
                todo.state = true;

            return todo;
        });

        this.setState({todos});
    }

    handleFilter = state => {
        this.setState({filter: state});
    }

    handleDelete = todo => {
        const todos = this.state.todos.filter(t => t._id !== todo._id);
        this.setState({todos});
    }

    makeId = length => {
        length = length || 10;
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    handleDeleteCompleted = () => {
        const todos = this.state.todos.filter(t => t.state !== true);
        this.setState({todos});
    }

    handleStateChange = todo => {
        const todos = this.state.todos.map(t => {
            if (t._id === todo._id)
                t.state = !t.state;
            return t;
        });
        this.setState({todos});
    }

    getFiterredData = items => {
        const {filter} = this.state;
        
        if(filter === undefined)
            return items;

        if(filter)
            return items.filter(i => i.state === true);
        else
            return items.filter(i => i.state === false);
    }

    render() { 
        const { todos, filter } = this.state;
        const filterred = this.getFiterredData(todos);

        return ( 
            <div id="hero" className="hero">
                <h1 className="title">Super Todo</h1>
                <div id="todoApp" className="todo-app">
                    <div id="todoMenu1" className="todo-menu-1">
                        <SelectAll onSelect={this.handleSelectToggle}/>
                        <Add onAdd={this.handleAdd}/>
                        
                    </div>
                    <ul id="todos" className="todos" aria-label="List of to do tasks">
                        {filterred.map(todo => (
                            <Todo 
                                key={todo._id} 
                                item={todo} 
                                onDelete={this.handleDelete}
                                onStateChange={this.handleStateChange} />
                            ))}
                    </ul>
                    <Filter 
                        onFilter={this.handleFilter} 
                        onDeleteCompleted={this.handleDeleteCompleted}
                        filter={filter}/>
                </div>
            </div>
         );
    }
}
 
export default Todos;
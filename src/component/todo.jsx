import React, { Component } from 'react';

class Todo extends Component {
    state = {  }
    render() { 

        const { item: todo, onDelete, onStateChange } = this.props;

        return ( 
            <li className="todo">
                <div className="pretty p-icon p-round">
                    <input type="checkbox" 
                        className="checkbox" 
                        // defaultChecked={todo.state} 
                        checked={todo.state} 
                        onChange={()=> onStateChange(todo)}/>
                    <div className="state">
                        <i className="icon mdi mdi-check mdi-18px"></i>
                        <label></label>
                    </div>
                </div>
                <label className={"todo-text " + (todo.state ? 'todo-checked-text': '')}>
                    {todo.title}
                </label>
                <button className="delete-button" onClick={()=> onDelete(todo)}>×</button>
            </li>
         );
    }
}
 
export default Todo;
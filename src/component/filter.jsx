import React, { Component } from 'react';

const Filter = () => {
    return ( 
        <div id="todoMenu2" className="todo-menu-2">
            <label id="todosLeft" className="todos-left" aria-label="Number of to do tasks left to complete"></label>
            <div id="todoMenu2Buttons" className="todo-menu-2-buttons">
            <button id="showAllTodos" className="menu-2-button active" aria-label="Show all to do tasks" onClick={()=> onFilter()}>All</button>
            <button id="showUncompletedTodos" className="menu-2-button" aria-label="Show active to do tasks" onClick={()=> onFilter(true)}>Active</button>
            <button id="showCompletedTodos" className="menu-2-button" aria-label="Show completed to do tasks" onClick={()=> onFilter(false)}>Completed</button>
            </div>
            <button id="deleteCompletedButton" className="delete-completed-button" aria-label="Clear completed to do tasks">Clear completed</button>
        </div>
     );
}
 
export default Filter;
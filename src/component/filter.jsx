import React from 'react';

const Filter = (props) => {
    const {onFilter, filter, onDeleteCompleted } = props;
    return ( 
        <div id="todoMenu2" className="todo-menu-2">
            <label id="todosLeft" className="todos-left" aria-label="Number of to do tasks left to complete"></label>
            <div id="todoMenu2Buttons" className="todo-menu-2-buttons">
            <button id="showUncompletedTodos" className={"menu-2-button " + (filter === false ? 'active' : null)} aria-label="Show active to do tasks" onClick={()=> onFilter(false)}>Active</button>
            <button id="showCompletedTodos" className={"menu-2-button " + (filter === true ? 'active' : null)} aria-label="Show completed to do tasks" onClick={()=> onFilter(true)}>Completed</button>
            <button id="showAllTodos" className={"menu-2-button " + (filter === undefined ? 'active' : null)} aria-label="Show all to do tasks" onClick={()=> onFilter()}>All</button>
            </div>
            <button id="deleteCompletedButton" 
                className="delete-completed-button" 
                onClick={()=> onDeleteCompleted()}
                aria-label="Clear completed to do tasks">Clear completed</button>
        </div>
     );
}
 
export default Filter;
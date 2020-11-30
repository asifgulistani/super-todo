import './App.css';

function App() {
  return (
    <div id="hero" className="hero">
      <h1 className="title">To Do List</h1>
      <div id="todoApp" className="todo-app">
        <div id="todoMenu1" className="todo-menu-1">
          <button id="toggleAll" className="toggle-all" aria-label="Toggle all to do tasks">
            <span className="rotate">&#x276F;</span>
          </button>
          <input id="addTodoTextInput" className="add-todo-text-input" type="text" placeholder="What do you need to do?" aria-label="Enter to do text" autofocus/>
        </div>
        <ul id="todos" className="todos" aria-label="List of to do tasks"></ul>
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

export default App;

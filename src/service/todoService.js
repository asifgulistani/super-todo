const todos = [
];

export function getTodos() {
    return todos;
}

export function getTodo(id) {
  return todos.find(m => m._id === id);
}
const todos = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    title: "Sample todo",
    state: true,
  }
];

export function getTodos() {
    return todos;
}

export function getTodo(id) {
  return todos.find(m => m._id === id);
}
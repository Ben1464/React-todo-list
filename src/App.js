import React from 'react';
import './App.css';
import Todo from './Components/Todo'
import TodoList from './Components/TodoList';

function App() {
  const todos = [
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a Todo App', completed: true },
    // Add more todos as needed
  ];

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
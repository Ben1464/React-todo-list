import React from 'react';
import './App.css';
import TodoList from './Components/TodoList.js'

function App() {
  const todos =[
    {id:1,text: 'Learn react', completed:false},
    {id:1,text: 'Learn componets and props', completed:true},
  ];


  return (
<>
<h1>Todo list</h1>
<TodoList todos = {todos} />
</>
  ) 
}

export default App;
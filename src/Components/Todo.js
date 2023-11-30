import React from 'react';

const Todo = ({ todo }) => {
  return (
    <div>
      <label>
        <input type="checkbox" checked={todo.completed} />
        {todo.text}
      </label>
    </div>
  );
};

export default Todo;
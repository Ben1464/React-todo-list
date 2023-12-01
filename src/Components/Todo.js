import React from 'react';

const Todo = ({todo})=>{
    return(
        <>
        <label>
            <input type = "checkbox" checked = {todo.completed}/>
            {todo.text}
        </label>
        </>

    );
};
export default Todo;
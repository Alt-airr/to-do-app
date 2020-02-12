import React, {useState} from "react";
import "./css/Todo.css";
import {NavLink} from 'react-router-dom'

function Todo({todo, remove, update, toggleComplete}) {
    const [isEditing, setIsEditing] = useState(false);
    const [task, setTask] = useState(todo);

    const handleClick = evt => {
        remove(evt.target.id);
    };
    const toggleFrom = () => {
        setIsEditing(!isEditing);
    };
    const handleUpdate = evt => {
        evt.preventDefault();
        update(todo.id, task);
        toggleFrom();
    };
    const handleChange = evt => {
        setTask({...task, [evt.target.name]: evt.target.value});
    };
    const toggleCompleted = () => {
        toggleComplete(todo.id, !todo.completed);
    };

    let result;
    if (isEditing) {
        result = (
            <div className="Todo">
                <form className="Todo-edit-form" onSubmit={handleUpdate}>
                    <input onChange={handleChange} name='title' className='inpt' value={task.title} type="text"
                           placeholder='Title'/>
                    <input onChange={handleChange} name='description' className='inpt' value={task.description}
                           type="text" placeholder='Description'/>
                    <button>Save</button>
                </form>
            </div>
        );
    } else {
        result = (
            <div className="Todo">
                <li id={todo.id}>
                    <input type="checkbox" checked={todo.completed} onChange={toggleCompleted}/>
                    <NavLink to={`/todos/${todo.id}`} className={todo.completed ? "Todo-task completed" : "Todo-task"}>
                      {todo.title}
                    </NavLink>
                </li>
                <div className="Todo-buttons">
                    <button onClick={toggleFrom}>
                        <i className="fas fa-pen"/>
                    </button>
                    <button onClick={handleClick}>
                        <i id={todo.id} className="fas fa-trash"/>
                    </button>
                </div>
            </div>
        );
    }
    return result;
}

export default Todo;

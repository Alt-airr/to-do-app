import React, {useReducer, useState} from "react";
import uuid from "uuid";
import "./css/newTodoForm.css";

function NewTodoForm({createTodo}) {


    const [task, setTask] = useState({title: '', description: ''});

    const handleChange = evt => {
        setTask({...task, [evt.target.name]: evt.target.value});
    };

    const handleSubmit = evt => {
        evt.preventDefault();
        const newTodo = {
            id: uuid(),
            title: task.title,
            description: task.description,
            completed: false
        };
        if(task.title.length > 3) { createTodo(newTodo);
        setTask({title: '', description: ''});} else {
            alert ('Please, enter title (at least 3 characters)')
        }
    };

    return (
        <form className="NewTodoForm" onSubmit={handleSubmit}>
            <label htmlFor="task">New todo</label>
            <input
                onChange={handleChange}
                type="text"
                name="title"
                value={task.title || ''}
                className='inpt'
                placeholder="Title"
            />
            <textarea
                onChange={handleChange}
                type="text"
                value={task.description || ''}
                className='inpt'
                name="description"
                placeholder="Description"
            />
            <button>Add Todo</button>
        </form>
    );
}

export default NewTodoForm;

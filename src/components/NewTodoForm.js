import React, {useReducer} from "react";
import uuid from "uuid";
import "./css/newTodoForm.css";

function NewTodoForm({createTodo}) {
    const [userInput, setUserInput] = useReducer(
        (state, newState) => ({...state, ...newState}),
        {
            task: ""
        }
    );

    const handleChange = evt => {
        setUserInput({[evt.target.name]: evt.target.value});
    };

    const handleSubmit = evt => {
        evt.preventDefault();
        const newTodo = {
            id: uuid(),
            title: userInput.task,
            description: userInput.description,
            completed: false
        };
        createTodo(newTodo);
        setUserInput({task: ""});
    };

    return (
        <form className="NewTodoForm" onSubmit={handleSubmit}>
            <label htmlFor="task">New todo</label>
            <input
                onChange={handleChange}
                type="text"
                name="task"
                className='inpt'
                placeholder="Title"
            />
            <textarea
                onChange={handleChange}
                type="text"
                className='inpt'
                name="description"
                placeholder="Description"
            />
            <button>Add Todo</button>
        </form>
    );
}

export default NewTodoForm;

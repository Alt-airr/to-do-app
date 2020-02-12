import React, {useState} from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import "./css/TodoList.css";

function TodoList() {

    const getTodos = () => {
        const todos = window.localStorage.getItem('todos');
        if (!todos) {
            return [];
        }
        return JSON.parse(todos);
    }

    const [list, setList] = useState(getTodos());

    const updateTodos = (newTodos) => {
        const stringifiedTodos = JSON.stringify(newTodos);
        window.localStorage.setItem('todos', stringifiedTodos);
        setList(newTodos);
    };

    const toggleComplete = (id, completed) => {
        const todoIdx = list.findIndex(todo => todo.id === id);
        const newTodos = [...list];
        newTodos[todoIdx].completed = completed;
        updateTodos(newTodos);
    };

    const create = (newTodo) => {
        updateTodos([...list, newTodo]);
    };

    const remove = id => {
        const updatedList = list.filter(todo => todo.id !== id);
        updateTodos(updatedList)
    };

    const update = (id, updatedTask) => {
        const updatedList = list.map(todo => {
            if (todo.id === id) {
                return updatedTask;
            }
            return todo;
        });
        updateTodos(updatedList);
    };

    const toDoList = list.map(todo => (
        <Todo
            toggleComplete={toggleComplete}
            update={update}
            remove={remove}
            key={todo.id}
            todo={todo}
        />
    ));

    return (
        <div className="TodoList">
            <h1>Todo List </h1>
            <ul>{toDoList}</ul>
            <NewTodoForm createTodo={create}/>
        </div>
    );
}

export default TodoList;

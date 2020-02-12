import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import NotFound from "../common/NotFound";
import './css/ToDoDetail.css'

const TodoDetail = (props) => {
    const getTodoDetail = () => {
        const todos = window.localStorage.getItem('todos');
        return JSON.parse(todos).filter(i => i.id === props.match.params.id);
    }

    const toDoDetail = useState(getTodoDetail());
    let result;

    if (toDoDetail[0].length > 0) {
        result = (<div>
            <div className="ToDoDetail">
                <div className="whole">
                    <div className="title">
                        <h1 style={{textDecoration: toDoDetail[0][0].completed ? 'line-through' : 'none'}}>
                            {toDoDetail[0][0].title}
                        </h1>
                    </div>
                    <div className="info">
                        <div className="content">
                            <ul>
                                <li>ID: {toDoDetail[0][0].id}</li>
                                <li>Description: {toDoDetail[0][0].description}</li>
                            </ul>
                        </div>
                        <div className="nav">
                            <NavLink exact to="/" className='btn'>
                                Back
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
    } else {
        result = <NotFound/>
    }
    return result
}

export default TodoDetail
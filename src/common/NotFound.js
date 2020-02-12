import React from 'react'
import {NavLink} from "react-router-dom";

const NotFound = () => (
    <div className='not_found'>
        <NavLink exact to="/" className='btn'>
            Back
        </NavLink>
        <div className='msg'>Page not found</div>
    </div>
)

export default NotFound
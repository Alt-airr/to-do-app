import React from 'react'
import './css/Preloader.css'

const Preloader = () => (
    <div className='preloader'>
        <div className='msg'>Data is fetching, wait a second please</div>
        <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
)

export default Preloader
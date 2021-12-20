import React from 'react'
import './TodoItem.css'
function TodoItem(props) {
    return (
            <li className='TodoItem'>
                <span className={`chulito`} onClick={props.onComplete}>
                    <p 
                    className={`${props.completed && 'active'}`}
                    >7</p>
                </span>  
                <p className={`text ${props.completed && 'completed'}`}>{props.text}</p>
                <span className='cerrar' onClick={props.onDelete}>x</span>
            </li>              
    )
}

export default TodoItem

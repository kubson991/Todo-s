import React from 'react'
import './TodoCounter.css'
import { TodoContext } from "../todoContext/index";
function TodoCounter() {
  const {totalTodos,completedTodos}= React.useContext(TodoContext)
    return (
        <>
    <div className="perspective-text">
      <div className="perspective-line">
        <p className='title_text'>things</p>
        <p className='title_text'>to</p>
      </div>
      <div className="perspective-line">
        <p className='title_text'>to</p>
        <p className='title_text'>do</p>
      </div>
      <div className="perspective-line">
        <p className='title_text'>do</p>
        <p className='title_text'>{totalTodos - completedTodos} left </p>
      </div>
      <div className="perspective-line">
        <p className='title_text'>{totalTodos - completedTodos} left </p>
        <p className='title_text'>of {totalTodos}</p>
      </div>
      <div className="perspective-line">
        <p className='title_text'>of {totalTodos} </p>
        <p className='title_text'></p>
      </div>
    </div>
        </>
    )
}

export default TodoCounter

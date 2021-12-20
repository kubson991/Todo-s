import React from 'react'
import './CreateTodoButton.css'
import { TodoContext } from '../todoContext'
function CreateTodoButton() {
    const {openModal,setOpenModal}=React.useContext(TodoContext)
    const onClick=()=>{
        setOpenModal(!openModal)
    }
    return (
        <button 
        className={`${openModal && 'clicked'} createButton`}
        onClick={()=>onClick()}>
            +
        </button>
    )
}

export default CreateTodoButton

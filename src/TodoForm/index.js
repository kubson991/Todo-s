import React from "react";
import { TodoContext } from "../todoContext";
import './TodoForm.css'
function TodoForm(){
    const [newTodo,setnewTodo] = React.useState('')
    const{
        addTodo,
        setOpenModal,
    }=React.useContext(TodoContext)

    const onCancel=()=>{
        setOpenModal(false) 
        setnewTodo('')
    }
    const onChange=(event)=>{
        setnewTodo(event.target.value)
    }
    const onSubmit=(event)=>{
        event.preventDefault()
        addTodo(newTodo)
        onCancel()
    }

    return(
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea
            value={newTodo}
            onChange={onChange}
            placeholder="comprar el mercado...">

            </textarea>
            <div>
                <button type="button" onClick={onCancel}>Cancelar</button>
                <button type="submit">Añadir</button>
            </div>
        </form>
    )
}

export {TodoForm}
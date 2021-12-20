import React from 'react'
import { TodoContext } from '../todoContext'
import './TodoSearch.css'

function TodoSearch() {
const {setSearch}=React.useContext(TodoContext)

    const change=(event)=>{
        setSearch(event.target.value)
    }
    return (
        <input placeholder="buscar ToDo's"
        onChange={change}>  
        </input>
    )
}

export default TodoSearch

import React from "react";
import TodoCounter from "../TodoCounter/TodoCounter";
import TodoList from "../TodoList/TodoList";
import TodoItem from "../TodoItem/TodoItem";
import CreateTodoButton from "../CreateTodoButton/CreateTodoButton";
import TodoSearch from "../TodoSearch/TodoSearch";
import "./App.css";
import { TodoProvider } from "../todoContext/index";
import { TodoContext } from "../todoContext/index";
import{Modal} from '../Modal'
import {TodoForm} from '../TodoForm'
import Loading from '../loading/Loading'
function App() {
  return (
    <TodoProvider>
      <TodoContext.Consumer>
        {({ loading, searchedTodos, completeTodos, deleteTodos,openModal,setOpenModal}) => (
          <>
            <div className="TodoCounter">
              <TodoCounter />
            </div>
            <div className="TodoSearch">
              <TodoSearch className="papa" />
            </div>
            <div className="TodoList">
            <TodoList>
              {loading && <Loading></Loading>}
              {!loading && !searchedTodos.length && (
                <p>Crea tu primer to do we</p>
              )}
              {searchedTodos.map((todo) => (
                <TodoItem
                  key={todo.text}
                  text={todo.text}
                  completed={todo.completed}
                  onComplete={() => completeTodos(todo.text)}
                  onDelete={() => deleteTodos(todo.text)}
                />
              ))}
            </TodoList>
            </div>
            <CreateTodoButton/>
             {openModal && (
                <Modal>
                  <div className="modalCard">
                    <TodoForm></TodoForm>
                  </div>
                </Modal>
            )}
          </>
        )}
      </TodoContext.Consumer>
    </TodoProvider>
  );
}
export default App;

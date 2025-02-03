import {useEffect, useReducer} from "react";
import {todoReducer} from "./todoReducer.js";
import {TodoList} from "./TodoList.jsx";
import {TodoAdd} from "./TodoAdd.jsx";
import {useTodo} from "../Hooks/useTodo.js";

export const TodoApp = props => {
    const initialState = [
    ]

    //Tarea crear un CustomHook llamado useTodo
    //Debe exponer todos,handleDeleteTodo,handleToggleTodo,handleNewTodo

    const{todos,handleDeleteTodo,handleToggleTodo,handleTodo,todosCount,pendingTodo}=useTodo()


    return(
        <>
            <h1>TodoApp: {todosCount} <small>Pendientes: {pendingTodo}</small></h1>
            <hr/>
            <div className="row">
                <div className="col-7">

                    <TodoList
                        todos={todos}
                        onDeleteTodo={handleDeleteTodo}
                        onToggleTodo={handleToggleTodo}/>

                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr/>

                    <TodoAdd onNewTodo={handleTodo}/>

                </div>
            </div>

        </>
    )
}
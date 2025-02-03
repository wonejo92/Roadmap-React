import {useEffect, useReducer} from "react";
import {todoReducer} from "../08-useReducer/todoReducer.js";

export const useTodo = () => {
    const initialState = [
    ]

    const init=()=>{
        return JSON.parse(localStorage.getItem("todos")) || [];
    }

    //UseReducer
    const [todos, dispatch] = useReducer(todoReducer,initialState,init)

    //Use Efeect cuando los todos cambien se debe almacenar en localStora
    useEffect(()=>{
        localStorage.setItem('todos', JSON.stringify(todos))
    },[todos])

    const handleTodo=(todo)=>{
        const action={
            type:'[TODO] Add todo',
            payload:todo
        }
        dispatch(action)
    }

    const handleDeleteTodo=(id)=>{
        const action={
            type:'[TODO] Remove todo',
            payload:id
        }
        dispatch(action)
    }

    const handleToggleTodo=(id)=>{
        // console.log(id)
        const action={
            type:'[TODO] Toggle todo',
            payload:id
        }
        dispatch(action)
    }


  return{
        todos,
        handleDeleteTodo,
        handleToggleTodo,
        handleTodo,
        todosCount:todos.length,
        pendingTodo:todos.filter(todo=> !todo.done).length
  }
}
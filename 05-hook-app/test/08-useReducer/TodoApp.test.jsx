import {getByText, render, screen} from "@testing-library/react";
import {TodoApp} from "../../src/08-useReducer/TodoApp.jsx";
import {useTodo} from "../../src/Hooks/useTodo.js";

jest.mock("../../src/Hooks/useTodo")

describe("Pruebas en TodoApp",()=>{
    useTodo.mockReturnValue({
        todos:[
            {id:1,description:'Comprar Papel',done:false},
            {id:2,description:'Comprar caramelos',done:true}
        ],
        handleDeleteTodo:jest.fn(),
        handleToggleTodo:jest.fn(),
        handleTodo:jest.fn(),
        todosCount:2,
        pendingTodo:1
    })
    test("Debe renderizar el componente de manera correcta",()=>{

        render(<TodoApp/>)
        screen.debug()
        expect(screen.getByText('Comprar Papel')).toBeTruthy()
        expect(screen.getByText('Comprar caramelos')).toBeTruthy()
    })
})
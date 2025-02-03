import {todoReducer} from "../../src/08-useReducer/todoReducer.js";

describe("test on TodoReducer",()=>{
    const initialState=[{
        id:1,
        description:'Demo Todo',
        done: false
    },{
        id:2,
        description:'Demo Todo',
        done: false
    }]
    test("Debe de regresar el estado inicial",()=>{
        const newTodo= todoReducer( initialState,{})
        expect(newTodo).toBe(initialState)
    })

    test("Debe agregar un todo",()=>{
        const action={
            type:'[TODO] Add todo',
            payload :{
                id: 3,
                description: 'Nuevo Todo',
                done:false
            }
        }
        const newTodo= todoReducer( initialState,action)
        expect(newTodo.length).toBe(3)
        expect(newTodo).toContain(action.payload)

    })

    test("Debe de eliminar un TODO",()=>{
        const action={
            type:'[TODO] Remove todo',
            payload: {
                id: 2
            }
        }
        const newTodo= todoReducer( initialState,action)
        expect(newTodo.length).toBe(2)
    })


    test("Debe de realizar el toggle del todo",()=>{
        const action={
            type:'[TODO] Toggle todo',
            payload:1
        }
        const newTodo= todoReducer( initialState,action)
        expect(newTodo[0].done).toBe(true)
    })

})
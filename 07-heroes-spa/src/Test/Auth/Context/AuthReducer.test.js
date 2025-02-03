// Pruebas
// 1. Debe retornal el estado por defecto
// 2. Debe de (Login) llamar el login autenticar y establecer el usuario
// 3. Debe de (Logout) borrar el name del usuario y el loged en false

import {AuthReducer} from "../../../Auth/Context/AuthReducer.js";
import {types} from "../../../Auth/Types/types.js";

describe("AuthReducer Test", () => {

    test("Debe retornar el estado por defecto", () => {
        const state=AuthReducer({logged:false},{})
        expect(state).toEqual({logged:false});

    })


    test("Debe de (Login) llamar el login autenticar y establecer el usuario", () => {
        const action={
            type:types.login,
            payload:{
                name:'Kevin Cordero',
                id:'123'
            }
        }
        const state=AuthReducer({logged:false},action)
        expect(state).toEqual({
            logged:true,
            user:action.payload
        });
    })


    test("Debe de (Logout) borrar el name del usuario y el loged en false", () => {
        const initialstate={
            logged:true,
            user:{id:'123',name:'Kevin Cordero'}
        };
        const action={
            type:types.logout
        }
        const newstate=AuthReducer(initialstate,action)
        // expect(newstate).toEqual({logged:false});
    })


})


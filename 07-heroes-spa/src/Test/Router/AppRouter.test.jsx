import {render} from "@testing-library/react";
import {AuthContext} from "../../Auth/index.js";

describe('Test on AppRouter', function(){
    test('deberia mostrar el login si no esta Autenticado', function(){
        const contextValue={
            logged:false
        }
        render(
            <AuthContext.Provider value={{contextValue}}>

            </AuthContext.Provider>
        )

    })
})
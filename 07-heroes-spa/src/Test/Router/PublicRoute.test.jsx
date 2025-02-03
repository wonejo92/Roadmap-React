import {render,screen} from "@testing-library/react";
import {AuthContext} from "../../Auth/index.js";
import {PublicRoute} from "../../Router/PublicRoute.jsx";


describe('PublicRoute Test', () => {
    test('debe de mostrar el children si no esta autenticado', () => {
        const contextValue={
            logged:false
        }
        render(
            <AuthContext.Provider value={contextValue}>
                <PublicRoute >
                    <h1>Ruta Publica</h1>
                </PublicRoute>
            </AuthContext.Provider>


        );
    })
})
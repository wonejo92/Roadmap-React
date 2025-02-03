
import {MainApp} from "../../src/09-useContext/MainApp.jsx";
import {render, screen} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";

describe("Pruebas en MainApp",()=>{
    test("Debe de mostrar el HomePage",()=>{
        render(
            <MemoryRouter>
                <MainApp />
            </MemoryRouter>);
        expect(screen.getByText('Home')).toBeTruthy()
        screen.debug()
    })
})
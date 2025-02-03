import {fireEvent, render, renderHook, screen} from "@testing-library/react";
import {MultipleCustomHooks} from "../../src/03-Examples/MultipleCustomHooks.jsx";
import {useFetch} from "../../src/Hooks/useFetch.js";
import {userCounter} from "../../src/Hooks/useCounters.js";

jest.mock("../../src/Hooks/useFetch");


describe("Pruebas en MultipleCustomHooks", () => {
    test("Debe mostrar el componente por defecto", () => {
        useFetch.mockReturnValue({
            data:null,
            isLoading: true,
            hasError: false,
            error: null,
        });
        // custom{}=renderHook(MultipleCustomHooks)
        render(<MultipleCustomHooks />)
        expect(screen.getByText('LOADING ...'))
        expect(screen.getByText('Pokemon Data'))
        const nextButton=screen.getByRole('button', { name: 'NEXT POKEMON' });
        screen.debug()
    })

    test("Debe mostrar un pokemon", () => {
        useFetch.mockReturnValue({
            data:{id:'123',name:'picachu',sprites:[]},
            isLoading: false,
            hasError: false,
            error: null,
        });
        render(<MultipleCustomHooks />)
        // expect(screen.getByText('123')).toBeTruthy()
        // expect(screen.getByText('picachu')).toBeTruthy()
        screen.debug()
    })

    test("Debe llamar a la funcion incrementar", () => {
        useFetch.mockReturnValue({
            data:{id:'123',name:'picachu',sprites:[]},
            isLoading: false,
            hasError: false,
            error: null,
        });
        render(<MultipleCustomHooks />)
        const nextButton=screen.getByRole('button', { name: 'NEXT POKEMON' });
        fireEvent.click(nextButton);
    })


})
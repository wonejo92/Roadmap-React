import {act, renderHook} from "@testing-library/react";
import {userCounter} from "../../src/Hooks/useCounters.js";

describe('Pruebas en useCounter', () => {
    test('debe retornar los valores por defecto', () => {
        //Renderizamos los Hooks con RenderHook
        const {result}=renderHook(()=>userCounter())
        const {counter,increment,decrement,reset}=result.current
        expect(counter).toBe(10);
        expect(decrement).toEqual(expect.any(Function ));
        expect(increment).toEqual(expect.any(Function ));
        expect(reset).toEqual(expect.any(Function ));
    })

    test('debe retornar el valor de 100 por defecto', () => {
        const {result}=renderHook(()=>userCounter(100))
        const {counter}=result.current
        expect(counter).toBe(100);
    })

    test('Debe funcionar el Increment', () => {
        const {result}=renderHook(()=>userCounter(100))
        const {counter,increment}=result.current
        act(()=>{
           increment();
        })
        expect(result.current.counter).toBe(101);
    })

    test('Debe funcionar el decrement', () => {
        const {result}=renderHook(()=>userCounter(100))
        const {counter,decrement}=result.current
        act(()=>{
            decrement();
        })
        expect(result.current.counter).toBe(99);
    })


    test('Debe funcionar el Reset', () => {
        const {result}=renderHook(()=>userCounter(100))
        const {counter,reset}=result.current
        act(()=>{
            reset();
        })
        expect(result.current.counter).toBe(100);
    })
});
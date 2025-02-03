import {act, renderHook} from "@testing-library/react";
import {useForm} from "../../src/Hooks/useForm.js";

describe('Test sobre useForm CustomHook', () => {
    const initialForm={
        name: 'John Doe',
        email: 'john@example.com',
    }
    test('Debe regresar el objeto inicial', () => {
        const {result} =renderHook(()=>useForm(initialForm))
        console.log(result.current)
        expect(result.current).toEqual(    {
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any(Function),
        onResetForm: expect.any(Function)
        })
    })
    test('Debe cambiar el nombre del formulario', () => {
        const newValue='Juan'

        //Montar el Hook
        const {result} =renderHook(()=>useForm(initialForm))
        const{onInputChange}=result.current;
        act(()=>{
            onInputChange({target:{name: 'name',value: newValue}});
        })
        expect(result.current.name).toBe(newValue)
        expect(result.current.formState.name).toBe(newValue)
    })


    test('Debe de realizar el reset', () => {
        const newValue='Juan'

        //Montar el Hook
        const {result} =renderHook(()=>useForm(initialForm))
        const{onInputChange,onResetForm}=result.current;
        act(()=>{
            onInputChange({target:{name: 'name',value: newValue}});
            onResetForm()
        })
        expect(result.current.name).toBe(initialForm.name)
        expect(result.current.formState.name).toBe(initialForm.name)
    })

});
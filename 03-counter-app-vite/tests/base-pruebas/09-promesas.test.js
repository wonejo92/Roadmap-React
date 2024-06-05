import {getHeroeByIdAsync} from "../../src/base-pruebas/09-promesas.js";

describe('Test of 09-promesas', () => {

    test('getHeroeByIdAsync returns heroe', (done) => {
        // Done is interpreted as a callback that makes it wait until the function
        // is finished executing when working with asynchronous functions.
        const id=1
        getHeroeByIdAsync(id).then(heroe => {
            expect(heroe).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
            })
            done();
        })
    })

    test('getHeroeByIdAsync returns Error', (done) => {
        // Done is interpreted as a callback that makes it wait until the function
        // is finished executing when working with asynchronous functions.
        const id=100
        getHeroeByIdAsync(id)
            .then(heroe => {
                expect(heroe).toBeFalsy();
                done();
            })
            .catch(error=>{
                expect(error).toBe('No se pudo encontrar el héroe');
                done();
            })
    })
})
import {retornaArreglo} from "../../src/base-pruebas/07-deses-arr.js";

describe('Test 07-deses-arr', () => {

    test('Test 07-deses-arr.', () => {
        const [letters,number]=retornaArreglo()
        //Para controlar que si  solo si llega ABC Y 123
        expect(letters).toBe('ABC')
        expect(number).toBe(123)

        //Controlar el tipo de datos espesificando el tipo
        expect(typeof letters).toBe('string')
        expect(typeof number).toBe('number')

        //Controlar sin espesificar
        expect( letters).toStrictEqual(expect.any(String))

    })
});
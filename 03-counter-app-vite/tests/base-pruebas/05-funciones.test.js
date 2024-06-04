import {getUser, getUsuarioActivo} from "../../src/base-pruebas/05-funciones.js";

describe('Test de 05-funciones', () => {
    test('getUser returns an object ', () => {

        const testUser={
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user =getUser()
        expect(testUser).toStrictEqual(user);
        //toStrcitEqual or toEqual use to compare objects

    })
    test('getUsuarioActivo ', () => {
        const name = 'Kevin Cordero';
        const user =getUsuarioActivo(name)
        expect(user).toEqual({
            uid: 'ABC567',
            username: name
        })
    })
});
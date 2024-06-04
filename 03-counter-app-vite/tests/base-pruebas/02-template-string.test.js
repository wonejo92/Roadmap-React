import {getSaludo} from "../../src/base-pruebas/02-template-string.js";

describe('Pruebas en 02-template-string', () => {
    test('getSaludo returns "Hola Kevin Cordero"', () => {
        const name = 'Kevin Cordero';
        const message = getSaludo(name);
        expect(message).toEqual(`Hola ${name}`);
    })
});
import {getImagen} from "../../src/base-pruebas/11-async-await.js";

describe('Test of 11-async-await', () => {

    test('getImagen returns image url', async () => {
        const url=await getImagen();
        console.log(url);
        expect(typeof url).toBe('string');
    })
})
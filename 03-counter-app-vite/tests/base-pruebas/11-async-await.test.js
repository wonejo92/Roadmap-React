import {getImagen} from "../../src/base-pruebas/11-async-await.js";

describe('Test of 11-async-await', () => {

    test('getImagen returns error', async () => {
        const resp=await getImagen();
        console.log(resp);
        expect(resp).toBe('Image not found');
    })
})
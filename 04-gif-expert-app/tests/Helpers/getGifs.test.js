import {getGifs} from "../../src/Helpers/getGifs.js";

describe('getGifs', () => {
    test('should return an array of Gifs', async () => {
        const gifs = await getGifs('One Piece');
        // console.log(gifs);
        expect(gifs.length).toBeGreaterThan(0)
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        })
    })
})
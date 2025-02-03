import {GifGrid} from "../../src/Components/index.js";
import {render} from "@testing-library/react";

describe('Tests on GifGrid', () => {
    const category='One Punch'

    test('Should render the loading at start', () => {
        render(<GifGrid category={category} />)
    })
    
});
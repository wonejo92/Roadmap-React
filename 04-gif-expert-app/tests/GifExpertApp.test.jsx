import {GifExpertApp} from "../src/GifExpertApp.jsx";
import {render,screen} from "@testing-library/react";

describe('Test on <GifExpertApp/>', () => {
    test("Should have correct default state", () => {
        render(<GifExpertApp />);
        screen.debug()
    })
})
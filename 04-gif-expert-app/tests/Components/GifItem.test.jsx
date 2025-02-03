import {GifItem} from "../../src/Components/index.js";
import {render, screen} from "@testing-library/react";

describe('GifItem Test', () => {
    const title = "GifItem";
    const url = "https://api.giphy.com/v1/gifs/";
    test('should render correctly and match with the snapshot', () => {
        const{container}=render(<GifItem title={title} url={url} />);
        expect(container).toMatchSnapshot();
    })
    test('should show the picture with the url correctly like the alt', () => {
        render(<GifItem title={title} url={url} />);
        // screen.debug()
        // expect(screen.getByRole('img').src).toBe(url)
        const{src,alt}=screen.getByRole('img')
        expect(src).toBe(url)
        expect(alt).toBe(alt)
    })
    test('should show the title on the component', () => {
        render(<GifItem title={title} url={url} />);
        expect(screen.getByText(title)).toBeTruthy();
    })
})
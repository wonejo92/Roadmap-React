// import {render,screen} from "react-dom";
import { render, screen } from '@testing-library/react';
import {FirstApp} from "../src/FirstApp.jsx";
import {getByTestId, getByText} from "@testing-library/react";

describe('FirstApp Component Test', () => {
    const title = 'REACT';
    const subTitle = "PropTypes";
    const numbers = 92;
    test('must show title on h1', () => {

        render(<FirstApp title={title} subTitle={subTitle} numbers={numbers} />);
        expect(screen.getByText(title)).toBeTruthy()
    })

    test('must show title on h1', () => {
        render(<FirstApp title={title} subTitle={subTitle} numbers={numbers} />);
        expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(title)
    })

    test('must show subtitle by props ', () => {
        render(<FirstApp title={title} subTitle={subTitle} numbers={numbers} />)
        expect(screen.getAllByText(subTitle).length).toBe(2)
    })

});
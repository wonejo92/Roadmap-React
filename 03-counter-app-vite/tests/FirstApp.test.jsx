import {render} from "react-dom";
import { act } from 'react-dom/test-utils';
import { createRoot } from 'react-dom/client';
import {FirstApp} from "../src/FirstApp.jsx";
import {getByTestId, getByText} from "@testing-library/react";

describe('FirstApp Component Test', () => {

    // test('must match the snapshot', () => {
    //     const title='REACT';
    //     const subTitle="PropTypes"
    //     const numbers=92
    //
    //     // Crea un div para usar como contenedor del render
    //     const container = document.createElement('div');
    //     document.body.appendChild(container);
    //
    //     // Usa createRoot en lugar de render
    //     const root = createRoot(container);
    //     root.render(<FirstApp title={title} subTitle={subTitle} numbers={numbers}/>);
    //     // O realizar pruebas de snapshot aquí si estás usando una librería de pruebas como Jest con react-test-renderer
    //     expect(container.innerHTML).toMatchSnapshot();
    //
    // })

    test('must show title on h1', () => {
        const title = 'REACT';
        const subTitle = "PropTypes";
        const numbers = 92;

        // Crea un div para usar como contenedor del render
        const container = document.createElement('div');
        document.body.appendChild(container);

        // Usa act para envolver la actualización de renderizado
        act(() => {
            const root = createRoot(container);
            root.render(<FirstApp title={title} subTitle={subTitle} numbers={numbers} />);
        });

        // O realizar pruebas de snapshot aquí si estás usando una librería de pruebas como Jest con react-test-renderer
        expect(getByText(container, title)).toBeTruthy();
        // const h1=container.querySelector('h1')
        // expect(h1.innerHTML).toContain(title);

        expect(getByTestId(container,"test-title")).toBeTruthy();
    });

    test('Should show the subtitle sent by the props', () => {
        const title = 'REACT';
        const subTitle = "PropTypes";
        const numbers = 92;

        // Crea un div para usar como contenedor del render
        const container = document.createElement('div');
        document.body.appendChild(container);

        // Usa act para envolver la actualización de renderizado
        act(() => {
            const root = createRoot(container);
            root.render(<FirstApp title={title} subTitle={subTitle} numbers={numbers} />);
        });

        // O realizar pruebas de snapshot aquí si estás usando una librería de pruebas como Jest con react-test-renderer
        expect(getByText(container, subTitle )).toBeTruthy();
        // const h1=container.querySelector('h1')
        // expect(h1.innerHTML).toContain(title);
    })
});
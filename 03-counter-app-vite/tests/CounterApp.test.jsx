import {fireEvent, render, screen} from '@testing-library/react';
import {FirstApp} from "../src/FirstApp.jsx";
import {CounterApp} from "../src/CounterApp.jsx";
describe('CounterApp Test', () => {

    const value=10

    test('must match with the snapshot', () => {
        const{container} = render(<CounterApp value={value} />);
        // screen.debug()
        expect(container).toMatchSnapshot();
    })

    test('must show 100 ', () => {
        render(<CounterApp value={100}  />);
        expect(screen.getByText('100')).toBeTruthy()
        // expect(screen.getByRole('heading', { level:2 })).toBeTruthy()
    })

    // SIMULACION DE EVENTOS (CLICK)
    test('one click simulation to increment with +1 button', () => {
        render(<CounterApp value={value}  />);
        fireEvent.click(screen.getByText('+1'))
        expect(screen.getByText('11')).toBeTruthy()
    })

    test('one click simulation to dicrement with -1 button', () => {
        render(<CounterApp value={value}  />);
        fireEvent.click(screen.getByText('-1'))
        expect(screen.getByText('9')).toBeTruthy()
    })

    test('one click simulation to reset with reset button', () => {
        render(<CounterApp value={value}  />);
        fireEvent.click(screen.getByText('+1'))
        fireEvent.click(screen.getByText('Reset'))
        expect(screen.getByText('10')).toBeTruthy()
    })
})
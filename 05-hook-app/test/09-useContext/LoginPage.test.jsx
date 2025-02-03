import {LoginPage} from "../../src/09-useContext/LoginPage.jsx";
import {fireEvent, render, screen} from "@testing-library/react";
import {UserContext} from "../../src/09-useContext/context/UserContext.jsx";

describe('LoginPage', () => {
    test('LoginPage renders correctly without user', () => {
        render(<UserContext.Provider value={{user: null}}>
            <LoginPage />
        </UserContext.Provider>);
        const pretag=screen.getByLabelText('pre')
        expect(pretag.innerHTML).toBe('null')
    })


    test('LoginPage renders correctly with a user and a button action', () => {
        const setUserMock = jest.fn();
        render(
            <UserContext.Provider value={{user: null,setUserMock}}>
                <LoginPage />
            </UserContext.Provider>
        )
        const button=screen.getByRole('button');
        // fireEvent.click(button);
    })
})
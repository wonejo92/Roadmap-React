import {HomePage} from "../../src/09-useContext/HomePage.jsx";
import {render,screen} from "@testing-library/react";
import {UserContext} from "../../src/09-useContext/context/UserContext.jsx";

describe('HomePage Test', () => {
    test('should render HomePage component Without User', () => {
        render(
            <UserContext.Provider value={{username: null}}>
                <HomePage />);
            </UserContext.Provider>
        )
    })
    // console.log(screen.getByLabelText("pre"))
})
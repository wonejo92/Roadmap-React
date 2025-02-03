import {fireEvent, render, screen} from "@testing-library/react";
import {AddCategory} from "../../src/Components/index.js";

describe('AddCategory test ', () => {
    test('AddCategory component', () => {
      render(<AddCategory onNewCategory={()=>{}} />);
      const input=screen.getByRole("textbox")
        fireEvent.input(input,{target:{value:"test Saitama"}});
        expect(input.value).toBe('test Saitama');
        screen.debug()


    })

    test('must call onNewCtagory if the input has a value', () => {
        const inputvalue='Saitama';
        const onNewCategory= jest.fn();
        //TODO
        render(<AddCategory onNewCategory={()=>{onNewCategory}} />);
        const input=screen.getByRole('textbox');
        const form=screen.getByRole('form')

        fireEvent.input(input,{target:{value:inputvalue}});
        fireEvent.submit(form)
        screen.debug()
    })
});
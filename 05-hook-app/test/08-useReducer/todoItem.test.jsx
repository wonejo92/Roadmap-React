import {fireEvent, render, screen} from "@testing-library/react";
import {TodoItem} from "../../src/08-useReducer/TodoItem.jsx";

describe("Pruebas en TodoItem",()=>{
    const todo={
        id:1,
        description: 'Piedra del alma',
        done:false
    }
    const onDeleteTodoMock =jest.fn()
    const onToggleTodoMock=jest.fn()

    // Limpia los mocks antes de utilizar
    beforeEach(()=>jest.clearAllMocks())

    test("Debe de mostrar el todo pendiente de completar",()=>{
        render(
            <TodoItem
                todo={todo}
                onToggleTodo={onDeleteTodoMock()}
                onDeleteTodo={onDeleteTodoMock()}
            />)
        const liElement = screen.getByRole('listitem')
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between')

        const spamElement = screen.getByLabelText("span")
        expect(spamElement.className).toContain('align-self-center')
    })

    test("Debe de mostrar el Todo Completado",()=>{
        todo.done=true;
        render(
            <TodoItem
                todo={todo}
                onToggleTodo={onDeleteTodoMock()}
                onDeleteTodo={onDeleteTodoMock()}
            />)

        const spamElement = screen.getByLabelText("span")
        expect(spamElement.className).toContain('text-decoration-line-through')

    })

    test("El span debe de llamar al ToggleTodo cuando se haga el click",()=>{
        render(
            <TodoItem
                todo={todo}
                onToggleTodo={onDeleteTodoMock()}
                onDeleteTodo={onDeleteTodoMock()}
            />)

        const spamElement = screen.getByLabelText("span")
//        fireEvent.click(spamElement)
//        screen.debug()
//        expect(onToggleTodoMock).toHaveBeenCalled(todo.id)
    })
})
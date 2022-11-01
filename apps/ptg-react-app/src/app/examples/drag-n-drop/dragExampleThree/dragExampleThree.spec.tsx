import { render, fireEvent } from '@testing-library/react';
import { SetStateAction } from 'react';
import DragExampleThree from './dragExampleThree';
import SingleTodo, { Todo } from './SingleTodo';
import TodoList from './TodoList';
import { DragDropContext } from 'react-beautiful-dnd';
import userEvent from '@testing-library/user-event';
import { Droppable } from 'react-beautiful-dnd';

//test case for DragExampleThree
describe('DragExampleThree', () => {
  let container: any;
  let getByTestId: any;
  let getByText: any;
  let getByLabelText: any;
  it('enter the todo in inpute', () => {
    const component = render(<DragExampleThree />);

    container = component.container;
    getByTestId = component.getByTestId;
    getByText = component.getByText;
    getByLabelText = component.getByLabelText;
    expect(component.baseElement).toBeTruthy();
    const input = getByTestId('entername');

    fireEvent.change(input, {
      target: { value: 'testtodo' },
    });

    fireEvent.keyPress(input, {
      key: 'Enter',
      code: 13,
    });
  });
});

//test case for TodoList
describe('TodoList', () => {
  let container: any;
  let getByTestId: any;
  let getByText: any;
  let getByLabelText: any;
  it('enter the todo in inpute', () => {
    const component = render(
      <DragDropContext onDragEnd={() => jest.fn()}>
        <TodoList
          todos={[
            { id: 1, todo: 'test', isDone: true },
            { id: 2, todo: 'test', isDone: true },
          ]}
          setTodos={function (value: SetStateAction<Todo[]>): void {
            throw new Error('Function not implemented.');
          }}
          setCompletedTodos={function (value: SetStateAction<Todo[]>): void {
            throw new Error('Function not implemented.');
          }}
          CompletedTodos={[]}
        />
      </DragDropContext>
    );

    container = component.container;
    getByTestId = component.getByTestId;
    getByText = component.getByText;
    getByLabelText = component.getByLabelText;
    expect(component.baseElement).toBeTruthy();
    fireEvent.click(container.querySelectorAll('.drag-icon')[2]);
    fireEvent.click(container.querySelectorAll('.drag-icon')[1]);
    fireEvent.click(container.querySelectorAll('.drag-icon')[0]);
    userEvent.type(container.querySelector('.todos__single--text'), 'demo task');
    userEvent.type(container.querySelector('.todos__single--text'), '{enter}');
    fireEvent.focus(container.querySelector('.todos__single--text'));
    fireEvent.keyDown(container.querySelector('.todos__single--text'), {
      key: 'Enter',
      code: 'Enter',
      keyCode: 13,
      charCode: 13,
    });
  });
});

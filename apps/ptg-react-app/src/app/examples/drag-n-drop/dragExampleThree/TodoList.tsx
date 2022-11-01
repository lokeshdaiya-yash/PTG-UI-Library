/**
 * @since April 2022
 * @author Ahilyabai Netaji Pawar 
 * @UpdatedBy Harsha Zalawa
 * @desc Drag and Drop example using react-beautiful-dnd library
 */

import React from 'react';
import SingleTodo from './SingleTodo';
import { Droppable } from 'react-beautiful-dnd';
import { useTranslation } from 'react-i18next';

interface Todo {
  id: number;
  todo: string;
  isDone: boolean;
}
export interface TodoListProps {
  todos: Array<Todo>;
  setTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
  setCompletedTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
  CompletedTodos: Array<Todo>;
}

export function TodoList({ todos, setTodos }: TodoListProps) {
  const { t } = useTranslation();
  return (
    <Droppable droppableId="TodosList">
      {(provided, snapshot) => (
        <div
          className="todos"
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <span className="todos__heading">{t('TODO_HEADER_TEXT')}</span>
          {todos?.map((todo, index) => (
            <SingleTodo
              index={index}
              todos={todos}
              todo={todo}
              key={todo.id}
              setTodos={setTodos}
            />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}

export default TodoList;

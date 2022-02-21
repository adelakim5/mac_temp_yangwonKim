import React, { useContext } from 'react';
import Styled from 'styled-components';

import { TodoItem } from 'Components/TodoItem';
import { TodoListContext } from 'Contexts/TodoList';

const Container = Styled.div`
    min-width: 350px;
    height: 400px;
    overflow-y: scroll;
    border: 1px solid #bdbdbd;
    margin-bottom: 20px;
`;

interface Props {
  readonly toDoList: string[];
  readonly deleteTodo: (index: number) => void;
}

export const TodoList = () => {
  const { deleteToDo, toDoList } = useContext(TodoListContext);

  return (
    <Container data-testid="todoList">
      {toDoList.map((item, index) => (
        <TodoItem key={index} label={item} onDelete={() => deleteToDo(index)} />
      ))}
    </Container>
  );
};

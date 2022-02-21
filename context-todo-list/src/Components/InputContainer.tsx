import React, { useContext, useState } from 'react';
import Styled from 'styled-components';

import { Button } from 'Components/Button';
import { Input } from 'Components/Input';

import { TodoListContext } from 'Contexts/TodoList';

const Container = Styled.div`
    display: flex;
`;

export const InputContainer = () => {
  const [toDo, setToDo] = useState<string>('');
  const { addToDo } = useContext(TodoListContext);

  return (
    <Container>
      <Input placeholder="할 일을 입력하시오..." value={toDo} onChange={setToDo} />
      <Button
        label="추가"
        onClick={() => {
          addToDo(toDo);
          setToDo('');
        }}
      />
    </Container>
  );
};

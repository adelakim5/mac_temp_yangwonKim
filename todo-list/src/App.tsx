import Styled from 'styled-components';
import { Button, Input, TodoItem } from 'Components';
import { useState } from 'react';

const Container = Styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-contents: center;
  flex-direction: column;
`;

const Contents = Styled.div`
  display: flex;
  background-color: #fff;
  flex-direction: column;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
`;

const InputContainer = Styled.div`
  display: flex;
`;

const TodoListContainer = Styled.div`
  min-width: 350px;
  height: 400px;
  overflow-y: scroll;
  border: 1px solid #bdbdbd;
  margin-bottom: 20px;
`;

function App() {
  const [toDo, setToDo] = useState('');
  const [toDoList, setToDoList] = useState<string[]>([]);

  const addTodo = (): void => {
    if (toDo) {
      setToDoList([...toDoList, toDo]);
      setToDo('');
    }
  };

  const deleteTodo = (index: number): void => {
    let list = [...toDoList];
    list.splice(index, 1);
    setToDoList(list);
  };

  return (
    <Container>
      <Contents>
        <TodoListContainer data-testid="todoList">
          {/* test를 위해 만든 testid */}
          {toDoList.map((item, index) => (
            <TodoItem key={item} label={item} onDelete={() => deleteTodo(index)} />
          ))}
        </TodoListContainer>
        <InputContainer>
          <Input
            placeholder="할 일을 입력하시오..."
            value={toDo}
            onChange={(text) => setToDo(text)}
          />
          <Button label="추가" onClick={addTodo} />
        </InputContainer>
      </Contents>
    </Container>
  );
}

export default App;

import Styled from 'styled-components';
import { InputContainer, TodoList } from 'Components';
import { TodoListProvider } from 'Contexts/TodoList';

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

function App() {
  return (
    <TodoListProvider>
      {/* rendering 되는 부분에 프로바이더를 적용 */}
      <Container>
        <Contents>
          <TodoList />
          <InputContainer />
          {/* 이제 props들은 컨텍스트 안에 있는 전역 데이터를 직접 참조할 예정이므로 필요없음 */}
        </Contents>
      </Container>
    </TodoListProvider>
  );
}

export default App;

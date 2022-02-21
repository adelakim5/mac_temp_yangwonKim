import React, { useContext } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { TodoListContext, TodoListProvider } from './index';

beforeEach(() => {
  localStorage.clear();
});

describe('TodoList Context', () => {
  it('컴포넌트가 잘 렌더링 되는지 확인', () => {
    const ChildComponent = () => {
      const { toDoList, addToDo } = useContext(TodoListContext);
      return (
        <div>
          <div onClick={() => addToDo('kim')}>Add ToDo</div>;
          <div>
            {toDoList.map((todo) => (
              <div key={todo}>todo</div>
            ))}
          </div>
        </div>
      );
    };

    render(
      <TodoListProvider>
        <ChildComponent />
      </TodoListProvider>,
    );

    expect(localStorage.getItem('ToDoList')).toBeNull();
    const button = screen.getByText('Add ToDo');
    fireEvent.click(button);
    expect(screen.getByText('kim')).toBeInTheDocument();
    expect(localStorage.getItem('ToDoList')).toBe('["kim"]' );
  });

  it('로컬스토리지에 있는 데이터를 불러와서 스테이트로 잘 세팅하는지 확인', () => {
    localStorage.setItem('ToDoList', '["김", "양원", "공부하자"]');

    const ChildComponent = () => {
      const { toDoList } = useContext(TodoListContext);
      return (
        <div>
          {toDoList.map((todo) => (
            <div key={todo}>{todo}</div>
          ))}
        </div>
      );
    };

    render(
      <TodoListProvider>
        <ChildComponent />
      </TodoListProvider>,
    );

    expect(screen.getByText('김')).toBeInTheDocument();
    expect(screen.getByText('양원')).toBeInTheDocument();
    expect(screen.getByText('공부하자')).toBeInTheDocument();
  });
});

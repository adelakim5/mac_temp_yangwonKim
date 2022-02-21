import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  it('renders components correctly', () => {
    const container = render(<App />);

    const todoList = screen.getByTestId('todoList'); // 할 일 목록 데이터가 비어있는지 확인하기 위하여 testid 로 가져옴
    // 이를 제대로 테스트하기 위해 testid를 설정할 필요가 있음 -> App.tsx로 가서 testid 설정

    expect(todoList).toBeInTheDocument(); // 화면에 잘 표시되는지 확인
    expect(todoList.firstChild).toBeNull(); // 아직 존재하지 않으므로, 자식요소가 비어있음 === toBeNull

    const input = screen.getByPlaceholderText('할 일을 입력하시오...');
    expect(input).toBeInTheDocument();

    const button = screen.getByText('추가');
    expect(button).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it('add todo-items', () => {
    render(<App />);
    const input = screen.getByPlaceholderText('할 일을 입력하시오...');
    const button = screen.getByText('추가');

    fireEvent.change(input, { target: { value: 'study react 1' } }); // study react 1을 입력
    fireEvent.click(button); // study react 1을 추가

    const todoList = screen.getByTestId('todoList');
    expect(todoList.childElementCount).toBe(1); // todolist의 자식 요소 개수가 1이 될 것

    fireEvent.change(input, { target: { value: 'study react-test' } });
    fireEvent.click(button);
    expect(todoList.childElementCount).toBe(2);
  });

  it('dose not add empty todo-item', () => {
    render(<App />);
    const todoList = screen.getByTestId('todoList');
    const length = todoList.childElementCount; // 현재 todoList안에 들어있는 item 개수

    const button = screen.getByText('추가');
    fireEvent.click(button); // input의 변화 없이 추가 클릭

    expect(todoList.childElementCount).toBe(length); // todoList item 개수는 그대로
  });

  it('delete todo-items', () => {
    render(<App />);

    const input = screen.getByPlaceholderText('할 일을 입력하시오...');
    const button = screen.getByText('추가');

    fireEvent.change(input, { target: { value: 'study react 1' } });
    fireEvent.click(button); // study react 1을 추가한 상태

    const todoList = screen.getByTestId('todoList');
    const todoItem = screen.getByText('study react 1');
    const deleteButtons = screen.getAllByText('삭제'); // todoitem이 입력되었으므로 삭제 버튼이 나올 것

    fireEvent.click(deleteButtons[0]);
    expect(todoItem).not.toBeInTheDocument();
    expect(todoList.childElementCount).toBe(0);
  });
});

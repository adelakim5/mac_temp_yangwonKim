import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import 'jest-styled-components';

import { TodoItem } from './index';

describe('<TodoItem />', () => {
  it('TodoItem 컴포넌트 잘 렌더링 되는지 확인', () => {
    const { container } = render(<TodoItem label="default label" />);
    const todoItem = screen.getByText('default label');
    expect(todoItem).toBeInTheDocument();

    const deleteButton = screen.getByText('삭제');
    expect(deleteButton).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('삭제 버튼 클릭하면?', () => {
    const handleClick = jest.fn(); // mock함수 생성
    render(<TodoItem label="default label" onDelete={handleClick} />);

    const deleteButton = screen.getByText('삭제');
    expect(handleClick).toHaveBeenCalledTimes(0);
    fireEvent.click(deleteButton);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});

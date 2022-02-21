import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import 'jest-styled-components';

import { Input } from './index';

describe('<Input />', () => {
  it('Input 컴포넌트가 잘 렌더링되는지 확인', () => {
    const { container } = render(<Input value="default value" />);

    const input = screen.getByDisplayValue('default value');
    expect(input).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it('데이터가 바뀌는지 확인', () => {
    render(<Input placeholder="default placeholder" />);

    const input = screen.getByPlaceholderText('default placeholder') as HTMLInputElement; // 굳이 as로 타입 변환 시도할 필요가 있나? 엄격하게 테스트 할거라면 그럴수도 있겠지만..
    fireEvent.change(input, { target: { value: 'study react' } }); // input 컴포넌트에 value 넣기
    expect(input.value).toBe('study react'); // 넣은 value가 그 값인지 확인
  });
});

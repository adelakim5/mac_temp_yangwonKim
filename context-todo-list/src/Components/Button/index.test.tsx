import { render, screen, fireEvent } from '@testing-library/react'; // 클릭 이벤트 사용을 위한 fireEvent
import 'jest-styled-components'; // styled-components를 좀 더 자세히 테스트할 수 있게 도와줌
import { Button } from './index';

describe('<Button />', () => {
  it('버튼 컴포넌트 잘 렌더링되는지 확인', () => {
    const { container } = render(<Button label="Button Test" />); // 버튼 컴포넌트의 필수 프롭인 라벨 값 설정하여 렌더링
    const label = screen.getByText('Button Test');
    expect(label).toBeInTheDocument(); // 화면에 표시되는지 확인

    const parent = label.parentElement;
    expect(parent).toHaveStyleRule('background-color', '#304ffe');
    expect(parent).toHaveStyleRule('background-color', '#1e40ff', {
      modifier: ':hover',
    });

    expect(container).toMatchSnapshot();
  });

  it('백그라운드 컬러랑 호버컬러 바뀌는지?', () => {
    const backgroundColor = '#ff1744';
    const hoverColor = '#f01440'; // 임의의 컬러들을 명명
    render(
      <Button label="Button Test" backgroundColor={backgroundColor} hoverColor={hoverColor} />,
    ); // button 컴포넌트에 넣어보기

    const parent = screen.getByText('Button Test').parentElement;
    expect(parent).toHaveStyleRule('background-color', backgroundColor);
    expect(parent).toHaveStyleRule('background-color', hoverColor, {
      modifier: ':hover',
    });
  });
});

it('버튼 클릭 잘되는지 확인', () => {
  const handleClick = jest.fn(); // handleClick 변수 선언
  render(<Button label="Button Test" onClick={handleClick} />); // handleClick을 button에 전달

  const label = screen.getByText('Button Test');
  expect(handleClick).toHaveBeenCalledTimes(0); // 아직 button 컴포넌트를 클릭하지 않았음을 확인하기 위하여 (handleClick이 호출되었는지 확인)
  fireEvent.click(label); // button 컴포넌트에 클릭 이벤트를 발생시키기
  expect(handleClick).toHaveBeenCalledTimes(1); // button 컴포넌트가 클릭되었음을 확인하기 위하여
});

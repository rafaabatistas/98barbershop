import { screen, fireEvent } from '@testing-library/react';
import { renderWithTheme } from '~src/utils/tests/helpers';
import { InputRadioGroup, InputRadioGroupProps } from './InputRadioGroup';
import theme from '~src/styles/theme';

describe('<InputRadioGroup />', () => {
  it('Deve renderizar o componente <InputRadioGroup />', () => {
    //Arrange
    const props: InputRadioGroupProps = {
      labelFor: 'nota',
      value: '1',
      onClick: jest.fn()
    };
    const { container } = renderWithTheme(<InputRadioGroup {...props} />);
    const inputRadioOne = screen.getByTestId('one-star') as HTMLInputElement;
    const inputRadioTwo = screen.getByTestId('two-star') as HTMLInputElement;
    const inputRadioThree = screen.getByTestId('three-star') as HTMLInputElement;
    const inputRadioFour = screen.getByTestId('four-star') as HTMLInputElement;
    const inputRadioFive = screen.getByTestId('five-star') as HTMLInputElement;
    //Act
    fireEvent.click(inputRadioOne);
    fireEvent.click(inputRadioTwo);
    fireEvent.click(inputRadioThree);
    fireEvent.click(inputRadioFour);
    fireEvent.click(inputRadioFive);
    //Assert
    expect(inputRadioOne).toBeInTheDocument();
    expect(inputRadioTwo).toBeInTheDocument();
    expect(inputRadioThree).toBeInTheDocument();
    expect(inputRadioFour).toBeInTheDocument();
    expect(inputRadioFive).toBeInTheDocument();
    expect(inputRadioOne).toBeChecked();
    expect(props.onClick).toHaveBeenCalledTimes(5);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Deve verificar se a nota avaliada é de uma estrela no componente <InputRadioGroup />', () => {
    //Arrange
    const props: InputRadioGroupProps = {
      labelFor: 'nota',
      value: '1',
      onClick: jest.fn()
    };
    renderWithTheme(<InputRadioGroup {...props} />);
    const inputRadioOne = screen.getByTestId('one-star') as HTMLInputElement;
    const labelStar = screen.getAllByTestId('label-star');
    //Act
    fireEvent.click(inputRadioOne);
    fireEvent.change(inputRadioOne, { target: { value: '1' } });
    //Assert
    expect(inputRadioOne).toBeChecked();
    expect(props.value).toBe('1');
    expect(props.onClick).toHaveBeenCalled();
    expect(labelStar[0]).toHaveStyle({ color: theme.colors.primary });
  });

  it('Deve verificar se a nota avaliada é de duas estrelas no componente <InputRadioGroup />', () => {
    //Arrange
    const props: InputRadioGroupProps = {
      labelFor: 'nota',
      value: '2',
      onClick: jest.fn()
    };
    renderWithTheme(<InputRadioGroup {...props} />);
    const inputRadioTwo = screen.getByTestId('two-star') as HTMLInputElement;
    const labelStar = screen.getAllByTestId('label-star');
    //Act
    fireEvent.click(inputRadioTwo);
    fireEvent.change(inputRadioTwo, { target: { value: '2' } });
    //Assert
    expect(inputRadioTwo).toBeChecked();
    expect(props.value).toBe('2');
    expect(props.onClick).toHaveBeenCalled();
    expect(labelStar[1]).toHaveStyle({ color: theme.colors.primary });
  });

  it('Deve verificar se a nota avaliada é de três estrelas no componente <InputRadioGroup />', () => {
    //Arrange
    const props: InputRadioGroupProps = {
      labelFor: 'nota',
      value: '3',
      onClick: jest.fn()
    };
    renderWithTheme(<InputRadioGroup {...props} />);
    const inputRadioThree = screen.getByTestId('three-star') as HTMLInputElement;
    const labelStar = screen.getAllByTestId('label-star');
    //Act
    fireEvent.click(inputRadioThree);
    fireEvent.change(inputRadioThree, { target: { value: '3' } });
    //Assert
    expect(inputRadioThree).toBeChecked();
    expect(inputRadioThree.value).toBe('3');
    expect(props.onClick).toHaveBeenCalled();
    expect(labelStar[2]).toHaveStyle({ color: theme.colors.primary });
  });

  it('Deve verificar se a nota avaliada é de quatro estrelas no componente <InputRadioGroup />', () => {
    //Arrange
    const props: InputRadioGroupProps = {
      labelFor: 'nota',
      value: '4',
      onClick: jest.fn()
    };
    renderWithTheme(<InputRadioGroup {...props} />);
    const inputRadioFour = screen.getByTestId('four-star') as HTMLInputElement;
    const labelStar = screen.getAllByTestId('label-star');
    //Act
    fireEvent.click(inputRadioFour);
    fireEvent.change(inputRadioFour, { target: { value: '4' } });
    //Assert
    expect(inputRadioFour).toBeChecked();
    expect(inputRadioFour.value).toBe('4');
    expect(props.onClick).toHaveBeenCalled();
    expect(labelStar[3]).toHaveStyle({ color: theme.colors.primary });
  });

  it('Deve verificar se a nota avaliada é de cinco estrelas no componente <InputRadioGroup />', () => {
    //Arrange
    const props: InputRadioGroupProps = {
      labelFor: 'nota',
      value: '5',
      onClick: jest.fn()
    };
    renderWithTheme(<InputRadioGroup {...props} />);
    const inputRadioFive = screen.getByTestId('five-star') as HTMLInputElement;
    const labelStar = screen.getAllByTestId('label-star');
    //Act
    fireEvent.click(inputRadioFive);
    fireEvent.change(inputRadioFive, { target: { value: '5' } });
    //Assert
    expect(inputRadioFive).toBeChecked();
    expect(inputRadioFive.value).toBe('5');
    expect(props.onClick).toHaveBeenCalled();
    expect(labelStar[4]).toHaveStyle({ color: theme.colors.primary });
  });
});

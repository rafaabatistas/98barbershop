import { screen, fireEvent } from '@testing-library/react';
import { renderWithTheme } from '~src/utils/tests/helpers';
import theme from '~src/styles/theme';

import { InputRadio } from './InputRadio';

describe('<InputRadio />', () => {
  it('Deve renderizar o componente <InputRadio />', () => {
    //Arrange
    const props = {
      labelFor: 'level',
      required: true,
      isChecked: '1',
      onClick: jest.fn()
    };
    const { container } = renderWithTheme(<InputRadio value="1" {...props} />);
    const inputRadio = screen.getByRole('radio', { name: '' });
    const labelIcon = screen.getByLabelText('Star');
    const label = screen.getByTestId('label-star');
    //Assert
    expect(inputRadio).toBeInTheDocument();
    expect(labelIcon).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(label).toHaveStyle({
      color: theme.colors.primary
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Deve verificar a chamada da função e a cor desativada do componente <InputRadio />', () => {
    //Arrange
    const propsInput = {
      labelFor: 'level',
      required: true,
      isChecked: '1',
      onClick: jest.fn()
    };
    renderWithTheme(<InputRadio color="starOff" value="3" {...propsInput} />);
    const inputRadio = screen.getByRole('radio', { name: '' }) as HTMLInputElement;
    const labelIcon = screen.getByLabelText('Star');
    const label = screen.getByTestId('label-star');
    //Act
    fireEvent.change(inputRadio, { target: { value: '2' } });
    fireEvent.click(labelIcon);
    //Assert
    expect(inputRadio).not.toBeChecked();
    expect(propsInput.onClick).toHaveBeenCalled();
    expect(label).toHaveStyle({
      color: theme.colors.starOff
    });
  });
});

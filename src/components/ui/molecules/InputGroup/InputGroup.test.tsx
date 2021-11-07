import { screen, fireEvent } from '@testing-library/react';
import { renderWithTheme } from '~src/utils/tests/helpers';

import { InputGroup } from './InputGroup';

describe('<InputGroup />', () => {
  it('Deve renderizar o componente <InputGroup />', () => {
    //Arrange
    const props = {
      label: 'Nome',
      labelFor: 'nome',
      placeholder: 'Ex: Rafael',
      onChange: jest.fn()
    };
    const { container } = renderWithTheme(<InputGroup type="text" {...props} />);
    const input = screen.getByRole('textbox', { name: /nome/i });
    //Assert
    expect(input).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Deve verificar a entrada de valores do componente <InputGroup />', () => {
    //Arrange
    const props = {
      label: 'Nome',
      labelFor: 'nome',
      placeholder: 'Ex: Rafael',
      onChange: jest.fn()
    };
    renderWithTheme(<InputGroup type="text" {...props} />);
    const input = screen.getByRole('textbox', { name: /nome/i }) as HTMLInputElement;
    //Act
    fireEvent.change(input, { target: { value: 'Rafael' } });
    //Assert
    expect(input.value).toBe('Rafael');
  });

  it('Deve verificar quando o input do componente <InputGroup /> não é obrigatório ', () => {
    //Arrange
    const props = {
      label: 'Nome',
      labelFor: 'nome',
      required: false,
      placeholder: 'Ex: Rafael',
      onChange: jest.fn()
    };
    renderWithTheme(<InputGroup type="text" {...props} />);
    const labelSpan = screen.getByTestId('label-span');
    //Assert
    expect(labelSpan).toBeInTheDocument();
  });
});

import { screen, fireEvent } from '@testing-library/react';
import { renderWithTheme } from '~src/utils/tests/helpers';

import { TextAreaGroup } from './TextAreaGroup';

describe('<TextAreaGroup />', () => {
  it('Deve renderizar o componente <TextAreaGroup />', () => {
    //Arrange
    const props = {
      label: 'Escreva sua opinião',
      labelFor: 'feedback',
      placeholder: 'Comente sobre sua experiência com nosso serviço',
      maxLength: 225,
      calcMaxLength: 225,
      onChange: jest.fn()
    };
    const { container } = renderWithTheme(<TextAreaGroup {...props} />);
    const label = screen.getByLabelText(/Escreva sua opinião/i);
    const textArea = screen.getByPlaceholderText(/Comente sobre sua experiência com nosso serviço/i);
    //Assert
    expect(container.firstChild).toMatchSnapshot();
    expect(label).toBeInTheDocument();
    expect(textArea).toBeInTheDocument();
  });

  it('Deve verificar a entrada de valores do componente <TextAreaGroup />', () => {
    //Arrange
    const props = {
      label: 'Escreva sua opinião',
      labelFor: 'feedback',
      required: true,
      placeholder: 'Comente sobre sua experiência com nosso serviço',
      maxLength: 225,
      calcMaxLength: 225,
      onChange: jest.fn()
    };
    renderWithTheme(<TextAreaGroup {...props} />);
    const textArea = screen.getByPlaceholderText(
      /Comente sobre sua experiência com nosso serviço/i
    ) as HTMLInputElement;
    //Act
    fireEvent.change(textArea, { target: { value: 'Excelente' } });
    //Assert
    expect(textArea.value).toBe('Excelente');
  });
});

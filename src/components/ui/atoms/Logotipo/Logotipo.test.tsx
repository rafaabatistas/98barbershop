import { screen } from '@testing-library/react';
import { renderWithTheme } from '~src/utils/tests/helpers';

import { Logotipo } from './Logotipo';

describe('<Logotipo />', () => {
  it('Deve renderizar o componente <Logotipo /> na sua cor e tamanho padrão', () => {
    renderWithTheme(<Logotipo />);
    //Arrange
    const labelText = screen.getByLabelText('98Barbershop');
    //Assert
    expect(labelText).toBeInTheDocument();
    expect(labelText.parentElement).toHaveStyle({ color: '#FFFFFF' });
    expect(labelText.parentElement).toHaveStyle({ width: '6rem', height: '8rem' });
  });

  it('Deve renderizar o componente <Logotipo /> com a cor preta', () => {
    renderWithTheme(<Logotipo color="black" />);
    //Arrange
    const labelText = screen.getByLabelText('98Barbershop');
    //Assert
    expect(labelText.parentElement).toHaveStyle({ color: '#000000' });
  });

  it('Deve renderizar o componente <Logotipo /> no seu tamanho pequeno', () => {
    renderWithTheme(<Logotipo size="small" />);
    //Arrange
    const labelText = screen.getByLabelText('98Barbershop');
    //Assert
    expect(labelText.parentElement).toHaveStyle({ width: '3.6rem', height: '4.8rem' });
  });

  it('Deve renderizar o componente <Logotipo /> no seu tamanho maior', () => {
    renderWithTheme(<Logotipo size="large" />);
    //Arrange
    const labelText = screen.getByLabelText('98Barbershop');
    //Assert
    expect(labelText.parentElement).toHaveStyle({ width: '8.5rem', height: '12rem' });
  });
});

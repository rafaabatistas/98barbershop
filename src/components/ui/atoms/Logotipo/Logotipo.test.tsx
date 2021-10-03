import { screen } from '@testing-library/react';
import { renderWithTheme } from '~src/utils/tests/helpers';
import 'jest-styled-components';

import { Logotipo } from './Logotipo';

describe('<Logotipo />', () => {
  it('Deve renderizar o componente <Logotipo /> na sua cor e tamanho padrão', () => {
    renderWithTheme(<Logotipo />);
    //Arrange
    const labelText = screen.getByLabelText('98Barbershop');
    //Assert
    expect(labelText).toBeInTheDocument();
    expect(labelText.parentElement).toHaveStyle({ color: '#FFFFFF' });
    expect(labelText.parentElement).toHaveStyle({ width: '7rem', height: '6rem' });
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
    expect(labelText.parentElement).toHaveStyle({ width: '4.8rem', height: '4rem' });
  });

  it('Deve renderizar o componente <Logotipo /> no seu tamanho maior', () => {
    renderWithTheme(<Logotipo size="large" />);
    //Arrange
    const labelText = screen.getByLabelText('98Barbershop');
    //Assert
    expect(labelText.parentElement).toHaveStyle({ width: '8.5rem', height: '7.5rem' });
  });

  it('Deve renderizar o componente <Logotipo /> responsivo para mobile', () => {
    renderWithTheme(<Logotipo hideOnMobile />);
    //Arrange
    const labelText = screen.getByLabelText('98Barbershop');
    //Assert
    expect(labelText.parentElement).toHaveStyle({ width: '7rem', height: '6rem' });
    expect(labelText.parentElement).toHaveStyleRule('width', '4.8rem', { media: '(max-width: 768px)' });
  });
});

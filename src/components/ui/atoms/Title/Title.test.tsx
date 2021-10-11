import { screen } from '@testing-library/react';
import { renderWithTheme } from '~src/utils/tests/helpers';
import 'jest-styled-components';

import { Title } from './Title';

describe('<Title />', () => {
  it('Deve renderizar o componente <Title /> em seu tamanho padrão e alinhado ao centro', () => {
    renderWithTheme(<Title>Seja o Primeiro a Saber</Title>);
    //Arrange
    const heading = screen.getByRole('heading', { name: 'Seja o Primeiro a Saber' });
    //Assert
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveStyle({ 'font-size': '2.5rem' });
    expect(heading).toHaveStyle({ 'text-align': 'center' });
    expect(heading).toHaveStyleRule('font-size', '4.5rem', { media: '(min-width: 768px)' });
  });

  it('Deve renderizar o componente <Title /> em seu tamanho large e alinhado a esquerda', () => {
    renderWithTheme(
      <Title size={'large'} textAlign="left">
        Seja o Primeiro a Saber
      </Title>
    );
    //Arrange
    const heading = screen.getByRole('heading', { name: 'Seja o Primeiro a Saber' });
    //Assert
    expect(heading).toHaveStyle({ 'font-size': '3.5rem' });
    expect(heading).toHaveStyle({ 'text-align': 'left' });
    expect(heading).toHaveStyleRule('font-size', '5.0rem', { media: '(min-width: 768px)' });
  });
});

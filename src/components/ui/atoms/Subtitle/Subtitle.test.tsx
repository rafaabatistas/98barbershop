import { screen } from '@testing-library/react';
import { renderWithTheme } from '~src/utils/tests/helpers';
import 'jest-styled-components';

import { Subtitle } from './Subtitle';

describe('<Subtitle />', () => {
  it('Deve renderizar o componente <Subtitle /> em seu tamanho padrão', () => {
    //Arrange
    renderWithTheme(<Subtitle>Em breve sua Barbearia favorita terá sua nova plataforma inaugurada!</Subtitle>);
    const subtitle = screen.getByRole('heading', {
      name: 'Em breve sua Barbearia favorita terá sua nova plataforma inaugurada!'
    });
    //Assert
    expect(subtitle).toBeInTheDocument();
    expect(subtitle).toHaveStyle({ 'font-size': '3.0rem' });
    expect(subtitle).toHaveStyleRule('font-size', '5.0rem', { media: '(min-width: 768px)' });
  });

  it('Deve renderizar o componente <Title /> em seu tamanho large', () => {
    renderWithTheme(
      <Subtitle size="large">Em breve sua Barbearia favorita terá sua nova plataforma inaugurada!</Subtitle>
    );
    //Arrange
    const subtitle = screen.getByRole('heading', {
      name: 'Em breve sua Barbearia favorita terá sua nova plataforma inaugurada!'
    });
    //Assert
    expect(subtitle).toHaveStyle({ 'font-size': '3.0rem' });
    expect(subtitle).toHaveStyleRule('font-size', '6.0rem', { media: '(min-width: 768px)' });
  });
});

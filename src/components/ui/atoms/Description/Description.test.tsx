import { screen } from '@testing-library/react';
import { renderWithTheme } from '~src/utils/tests/helpers';

import { Description } from './Description';

describe('<Description />', () => {
  it('Deve renderizar o componente <Description /> com suas props padrões', () => {
    //Arrange
    renderWithTheme(<Description>Rua Caminho Encanto 334 - Guarulhos - SP</Description>);
    const description = screen.getByTestId('description');
    //Assert
    expect(description).toBeInTheDocument();
    expect(description).toHaveTextContent('Rua Caminho Encanto 334 - Guarulhos - SP');
    expect(description).toHaveStyle({ 'font-size': '1.4rem' });
  });

  it('Deve renderizar o componente <Description /> em seu tamanho medium e com uma margim-bottom', () => {
    //Arrange
    renderWithTheme(
      <Description size="medium" marginBottom>
        Rua Caminho Encanto 334 - Guarulhos - SP
      </Description>
    );
    const description = screen.getByTestId('description');
    //Assert
    expect(description).toHaveStyle({ 'font-size': '1.6rem' });
    expect(description).toHaveStyle({ 'margin-bottom': '2.5rem' });
  });

  it('Deve renderizar o componente <Description /> em seu tamanho xmedium', () => {
    //Arrange
    renderWithTheme(<Description size="xmedium">Rua Caminho Encanto 334 - Guarulhos - SP</Description>);
    const description = screen.getByTestId('description');
    //Assert
    expect(description).toHaveStyle({ 'font-size': '1.8rem' });
  });
});

import { screen } from '@testing-library/react';
import { renderWithTheme } from '~src/utils/tests/helpers';

import theme from '~src/styles/theme';

import { ButtonScroll } from './ButtonScroll';

describe('<ButtonScroll />', () => {
  it('Deve renderizar os estilos primarios do componente <ButtonScroll />', () => {
    //Arrange
    const { container } = renderWithTheme(<ButtonScroll to="servicos">Marcar Hora</ButtonScroll>);
    const link = screen.getByTestId('button-scroll');
    //Assert
    expect(link).toHaveStyle({
      background: theme.colors.secondary,
      border: `0.2rem solid ${theme.colors.secondary}`
    });

    expect(container.firstChild).toMatchSnapshot();
  });

  it('Deve renderizar os estilos secundarios do componente <ButtonScroll />', () => {
    //Arrange
    renderWithTheme(
      <ButtonScroll to="servicos" buttonStyle="secondary">
        Marcar Hora
      </ButtonScroll>
    );
    const link = screen.getByTestId('button-scroll');

    //Assert
    expect(link).toHaveStyle({
      background: 'rgba(255, 255, 255, 0.12)',
      border: `0.2rem solid ${theme.colors.white}`
    });
  });

  it('Deve renderizar o componente <ButtonScroll> com um margin-left big', () => {
    //Arrange
    renderWithTheme(
      <ButtonScroll to="servicos" marginLeft="big">
        Saiba Mais
      </ButtonScroll>
    );
    const link = screen.getByTestId('button-scroll');

    //Assert
    expect(link).toHaveStyle({ marginLeft: theme.spacings.big });
  });
});

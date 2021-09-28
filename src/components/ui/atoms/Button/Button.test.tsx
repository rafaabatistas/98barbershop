import { screen } from '@testing-library/react';
import { renderWithTheme } from '~src/utils/tests/helpers';

import theme from '~src/styles/theme';

import { Button } from './Button';

describe('<Button />', () => {
  it('Deve renderizar os estilos primarios do componente <Button />', () => {
    const { container } = renderWithTheme(<Button>Marcar Hora</Button>);

    expect(screen.getByRole('button', { name: /Marcar Hora/i })).toHaveStyle({
      background: theme.colors.secondary,
      border: `0.2rem solid ${theme.colors.secondary}`
    });

    expect(container.firstChild).toMatchSnapshot();
  });

  it('Deve renderizar os estilos secundarios do componente <Button />', () => {
    renderWithTheme(<Button buttonStyle="secondary">Marcar Hora</Button>);

    expect(screen.getByRole('button', { name: /Marcar Hora/i })).toHaveStyle({
      background: 'rgba(255, 255, 255, 0.12)',
      border: `0.2rem solid ${theme.colors.white}`
    });
  });

  it('Deve renderizar o componente <Button /> como um <a>', () => {
    renderWithTheme(
      <Button as="a" href="/link">
        Marcar Hora
      </Button>
    );

    expect(screen.getByRole('link', { name: /Marcar Hora/i })).toHaveAttribute('href', '/link');
  });
});

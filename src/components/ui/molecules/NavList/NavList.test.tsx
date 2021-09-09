import { fireEvent, screen } from '@testing-library/dom';
import { renderWithTheme } from '~src/utils/tests/helpers';

import { NavList } from './NavList';

jest.mock('~atoms/Logotipo/Logotipo', () => ({
  __esModule: true,
  Logotipo: function Mock() {
    return <div data-testid="Logo" />;
  }
}));

describe('<NavList />', () => {
  it('Deve Renderizar todos os components de <NavList />', () => {
    const { container } = renderWithTheme(<NavList />);

    expect(screen.getByTestId('Logo')).toBeInTheDocument();

    expect(screen.getByLabelText(/Abrir e Fechar/i)).toBeInTheDocument();

    expect(screen.getByLabelText(/Menu Full/i)).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('Deve Abrir e fechar o componente <MenuMobile /> ao clicar Menu Hamburger do <NavList />', () => {
    renderWithTheme(<NavList />);

    const Menu = screen.getByLabelText(/Abrir e Fechar/i);
    const fullMenu = screen.getByLabelText(/Menu Full/i);

    // verificar se o menu tá escondido
    expect(fullMenu.getAttribute('aria-hidden')).toBe('true');
    expect(fullMenu).toHaveStyle({
      opacity: 0,
      'pointer-events': 'none'
    });

    // clicar no botão de abrir o menu
    fireEvent.click(Menu);

    //verificar se o menu ele abriu
    expect(fullMenu.getAttribute('aria-hidden')).toBe('false');

    expect(fullMenu).toHaveStyle({
      opacity: '0.9',
      'pointer-events': 'all'
    });
  });
});

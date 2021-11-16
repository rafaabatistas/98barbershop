import { screen, fireEvent } from '@testing-library/react';
import { renderWithTheme } from '~src/utils/tests/helpers';

import { NavLinks } from './NavLinks';

describe('<NavLinks />', () => {
  it('Deve renderizar todos os componentes dentro do componente <NavLinks />', () => {
    const { container } = renderWithTheme(
      <NavLinks
        paddingXLine={10}
        names={[
          { nav: 'Home', link: 'home' },
          { nav: 'Sobre', link: 'sobre' },
          { nav: 'Serviços', link: 'servicos' },
          { nav: 'Equipe', link: 'equipe' },
          { nav: 'Opinião', link: 'opiniao' },
          { nav: 'FeedBack', link: 'feedBack' }
        ]}
      >
        <h1>Logo</h1>
      </NavLinks>
    );

    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/Sobre/i)).toBeInTheDocument();
    expect(screen.getByText(/Serviços/i)).toBeInTheDocument();

    expect(screen.getByRole('heading', { name: /Logo/i })).toBeInTheDocument();

    expect(screen.getByText(/Equipe/i)).toBeInTheDocument();
    expect(screen.getByText(/Opinião/i)).toBeInTheDocument();
    expect(screen.getByText(/FeedBack/i)).toBeInTheDocument();

    expect(screen.getByLabelText(/Line/i)).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('Verificar hover do menu do componente <NavLinks />', () => {
    renderWithTheme(
      <NavLinks
        paddingXLine={10}
        names={[
          { nav: 'Home', link: 'home' },
          { nav: 'Sobre', link: 'sobre' },
          { nav: 'Serviços', link: 'servicos' },
          { nav: 'Equipe', link: 'equipe' },
          { nav: 'Opinião', link: 'opiniao' },
          { nav: 'FeedBack', link: 'feedBack' }
        ]}
      >
        <h1>Logo</h1>
      </NavLinks>
    );

    //Por Padrao ativado HOME
    expect(screen.getByText('Home')).toHaveStyleRule('color', '#1affea', { modifier: ':hover' });

    //Clicar no Sobre
    fireEvent.click(screen.getByText(/Sobre/i));

    expect(screen.getByText('Home')).toHaveStyle({
      color: ''
    });

    expect(screen.getByText(/Sobre/i)).toHaveStyleRule('color', '#1affea', { modifier: ':hover' });

    //Clicar no Serviços
    fireEvent.click(screen.getByText(/Serviços/i));

    expect(screen.getByText(/Sobre/i)).toHaveStyle({
      color: ''
    });

    expect(screen.getByText(/Serviços/i)).toHaveStyleRule('color', '#1affea', { modifier: ':hover' });

    //Clicar no Equipe
    fireEvent.click(screen.getByText(/Equipe/i));

    expect(screen.getByText(/Serviços/i)).toHaveStyle({
      color: ''
    });

    expect(screen.getByText(/Equipe/i)).toHaveStyleRule('color', '#1affea', { modifier: ':hover' });

    //Clicar no Opinião
    fireEvent.click(screen.getByText(/Opinião/i));

    expect(screen.getByText(/Equipe/i)).toHaveStyle({
      color: ''
    });

    expect(screen.getByText(/Opinião/i)).toHaveStyleRule('color', '#1affea', { modifier: ':hover' });

    //Clicar no FeedBack
    fireEvent.click(screen.getByText(/FeedBack/i));

    expect(screen.getByText(/Opinião/i)).toHaveStyle({
      color: ''
    });

    expect(screen.getByText(/FeedBack/i)).toHaveStyleRule('color', '#1affea', { modifier: ':hover' });
  });
});

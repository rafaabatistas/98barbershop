import { screen, fireEvent } from '@testing-library/react';
import { renderWithTheme } from '~src/utils/tests/helpers';

import { NavLinks } from './NavLinks';

describe('<NavLinks />', () => {
  it('Deve renderizar todos os componentes dentro do componente <NavLinks />', () => {
    const { container } = renderWithTheme(
      <NavLinks paddingXLine={10} names={['Home', 'Sobre', 'Serviços', 'Equipe', 'Opinião', 'FeedBack']}>
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
      <NavLinks paddingXLine={10} names={['Home', 'Sobre', 'Serviços', 'Equipe', 'Opinião', 'FeedBack']}>
        <h1>Logo</h1>
      </NavLinks>
    );

    //Por Padrao ativado HOME
    expect(screen.getByText(/Home/i)).toHaveStyle({
      color: 'rgb(247, 24, 18)'
    });

    //Clicar no Sobre
    fireEvent.click(screen.getByText(/Sobre/i));

    expect(screen.getByText(/Home/i)).toHaveStyle({
      color: 'rgb(255, 255, 255)'
    });

    expect(screen.getByText(/Sobre/i)).toHaveStyle({
      color: 'rgb(247, 24, 18)'
    });

    //Clicar no Serviços
    fireEvent.click(screen.getByText(/Serviços/i));

    expect(screen.getByText(/Sobre/i)).toHaveStyle({
      color: 'rgb(255, 255, 255)'
    });

    expect(screen.getByText(/Serviços/i)).toHaveStyle({
      color: 'rgb(247, 24, 18)'
    });

    //Clicar no Equipe
    fireEvent.click(screen.getByText(/Equipe/i));

    expect(screen.getByText(/Serviços/i)).toHaveStyle({
      color: 'rgb(255, 255, 255)'
    });

    expect(screen.getByText(/Equipe/i)).toHaveStyle({
      color: 'rgb(247, 24, 18)'
    });

    //Clicar no Opinião
    fireEvent.click(screen.getByText(/Opinião/i));

    expect(screen.getByText(/Equipe/i)).toHaveStyle({
      color: 'rgb(255, 255, 255)'
    });

    expect(screen.getByText(/Opinião/i)).toHaveStyle({
      color: 'rgb(247, 24, 18)'
    });

    //Clicar no FeedBack
    fireEvent.click(screen.getByText(/FeedBack/i));

    expect(screen.getByText(/Opinião/i)).toHaveStyle({
      color: 'rgb(255, 255, 255)'
    });

    expect(screen.getByText(/FeedBack/i)).toHaveStyle({
      color: 'rgb(247, 24, 18)'
    });
  });
});

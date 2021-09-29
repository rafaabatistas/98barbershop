import { screen } from '@testing-library/react';
import theme from '~src/styles/theme';
import { renderWithTheme } from '~src/utils/tests/helpers';

import { Heading, HeadingProps } from './Heading';

const props: HeadingProps = {
  title: 'Bem Vindo a BarberShop',
  subtitle: 'We Are BarberShop!',
  description: 'Enjoy the Ultimate Relaxed Grooming Experience For Men every time you step into the Boardroom',
  buttonLabelOne: 'Marcar Hora',
  buttonLabelTwo: 'Saiba Mais'
};

describe('<Heading />', () => {
  it('Deve renderizar todos os componentes o componente <Heading />', () => {
    const { container } = renderWithTheme(<Heading buttons={2} {...props} />);

    expect(screen.getByRole('heading', { name: /Bem Vindo a BarberShop/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /We Are BarberShop!/i })).toBeInTheDocument();
    expect(
      screen.getByText(/Enjoy the Ultimate Relaxed Grooming Experience For Men every time you step into the Boardroom/i)
    ).toBeInTheDocument();

    expect(screen.getByRole('button', { name: /Marcar Hora/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Saiba Mais/i })).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('Deve renderizar componente <Heading /> e verificar se os botões não são renderizados', () => {
    renderWithTheme(<Heading {...props}></Heading>);

    expect(screen.queryByRole('button', { name: /Marcar Hora/i })).not.toBeInTheDocument();
  });

  it('Deve renderizar componente <Heading /> e verificar se só um botão é renderizados', () => {
    renderWithTheme(<Heading buttons={1} {...props}></Heading>);

    expect(screen.getByRole('button', { name: /Marcar Hora/i })).toBeInTheDocument();
  });

  it('Deve renderizar o conteúdo do componente <Heading /> e verificar a margem dos botões', () => {
    renderWithTheme(
      <Heading buttons={2} {...props}>
        <h1>Content</h1>
      </Heading>
    );

    expect(screen.getByRole('heading', { name: /Content/i })).toBeInTheDocument();

    expect(screen.getByRole('button', { name: /Marcar Hora/i }).parentElement?.parentElement).toHaveStyle({
      'margin-top': theme.spacings.medium
    });
  });
});

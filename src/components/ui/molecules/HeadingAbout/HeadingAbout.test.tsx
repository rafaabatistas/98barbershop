import { screen } from '@testing-library/react';
import { renderWithTheme } from '~src/utils/tests/helpers';
import { HeadingAbout } from './HeadingAbout';

describe('<HeadingAbout />', () => {
  it('Deve renderizar o componente <HeadingAbout />', () => {
    //Arrange
    const props = {
      title: 'Olá Pessoal',
      subtitle: 'Nós Somos a 98BarberShop',
      lineBottom: true
    };
    const { container } = renderWithTheme(<HeadingAbout {...props} />);
    //Assert
    expect(screen.getByRole('heading', { name: 'Olá Pessoal' })).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('Deverenderizar o componente <HeadingAbout /> com o lineLeft', () => {
    //Arrange
    const props = {
      title: 'Olá Pessoal',
      subtitle: 'Nós Somos a 98BarberShop',
      lineLeft: true
    };
    renderWithTheme(<HeadingAbout {...props} />);
    const line = screen.getByLabelText('LineTitle');

    //Assert
    expect(line).toBeInTheDocument();
  });

  it('Deve renderizar o componente <HeadingAbout /> com um ícone', () => {
    //Arrange
    const props = {
      title: 'Olá Pessoal',
      subtitle: 'Nós Somos a 98BarberShop',
      icon: '/assets/svg/icon-about.svg',
      lineLeft: true
    };
    renderWithTheme(<HeadingAbout {...props} />);
    const icon = screen.getByLabelText('Sinalizador Giratório');

    //Assert
    expect(icon).toBeInTheDocument();
  });

  it('Deve renderizar o componente <HeadingAbout /> com o title centralizado', () => {
    //Arrange
    const props = {
      title: 'Olá Pessoal',
      subtitle: 'Nós Somos a 98BarberShop',
      icon: '/assets/svg/icon-about.svg',
      textAlignCenter: true,
      lineLeft: true
    };
    renderWithTheme(<HeadingAbout {...props} />);
    const title = screen.getByRole('heading', { name: 'Olá Pessoal' });

    //Assert
    expect(title).toHaveStyle({ textAlign: 'center' });
  });
});

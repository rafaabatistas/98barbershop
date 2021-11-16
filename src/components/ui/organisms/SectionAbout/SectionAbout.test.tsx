import { screen } from '@testing-library/react';
import { renderWithTheme } from '~src/utils/tests/helpers';
import 'jest-styled-components';

import { SectionAbout } from './SectionAbout';

describe('<SectionAbout />', () => {
  it('Deve renderizar o componente <SectionAbout />', () => {
    //Arrange
    const { container } = renderWithTheme(<SectionAbout />);
    const title = screen.getByRole('heading', { name: 'Olá Pessoal' });
    const subtitle = screen.getByRole('heading', { name: 'Nós Somos a 98BarberShop' });
    const image = screen.getByAltText('Foto ilustrativa do interior de uma barbearia');

    //Assert
    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
    expect(image).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});

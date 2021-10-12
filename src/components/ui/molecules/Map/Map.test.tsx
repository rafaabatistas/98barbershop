import { screen } from '@testing-library/react';
import { renderWithTheme } from '~src/utils/tests/helpers';

import Map from './Map';

describe('<Map />', () => {
  it('Deve renderizar com nenhum marker no mapa', () => {
    renderWithTheme(<Map />);
    //Assert
    expect(
      screen.getByRole('link', {
        name: /a js library for interactive maps/i
      })
    ).toBeInTheDocument();
  });

  it('Deve renderizar com o maker no lugar determinado', () => {
    //Arrange
    const place = {
      id: '1',
      name: 'Island',
      slug: 'Island',
      location: {
        latitude: 180,
        longitude: 0
      }
    };
    const place2 = {
      id: '2',
      name: 'São Paulo',
      slug: 'São Paulo',
      location: {
        latitude: 180,
        longitude: 0
      }
    };
    renderWithTheme(<Map places={[place, place2]} />);

    //Assert
    expect(screen.getByTitle(/island/i)).toBeInTheDocument();
    expect(screen.getByTitle(/São Paulo/i)).toBeInTheDocument();
  });
});

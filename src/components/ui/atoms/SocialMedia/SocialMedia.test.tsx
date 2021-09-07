import { screen } from '@testing-library/react';
import { renderWithTheme } from '~src/utils/tests/helpers';

import { SocialMedia } from './SocialMedia';

describe('<SocialMedia />', () => {
  beforeEach(() => {
    const props = {
      link: 'https://www.instagram.com/98barbershop/',
      image: '/assets/svg/icon-instagram',
      alt: 'Link que leva para a página no instagram'
    };
    renderWithTheme(<SocialMedia {...props} />);
  });

  it('Deve renderizar o componente <SocialMedia />', () => {
    //Arrange
    const altText = screen.getByAltText('Link que leva para a página no instagram');
    //Assert
    expect(altText).toBeInTheDocument();
  });
});

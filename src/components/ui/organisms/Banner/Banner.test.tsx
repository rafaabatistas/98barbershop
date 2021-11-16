import { screen } from '@testing-library/dom';

import { renderWithTheme } from '~src/utils/tests/helpers';

import { Banner, BannerProps } from './Banner';

const props: BannerProps = {
  img: '/assets/img/slide-1.jpg',
  title: 'Bem Vindo a BarberShop',
  subtitle: 'We Are BarberShop!',
  description: 'Enjoy the Ultimate Relaxed Grooming Experience For Men every time you step into the Boardroom',
  buttons: 2,
  buttonLabelOne: 'Marcar Hora',
  buttonLabelTwo: 'Saiba Mais'
};

jest.mock('~molecules/Heading/Heading', () => ({
  __esModule: true,
  Heading: function Mock() {
    return <div data-testid="Heading" />;
  }
}));

describe('<Banner />', () => {
  it('Deve renderizar o componente <Banner /> com o componente <Heading />', () => {
    //Arrange
    const { container } = renderWithTheme(<Banner {...props} />);
    //Assert
    expect(container).toHaveStyle({
      'background-image': props.img
    });

    expect(screen.getByTestId(/Heading/i)).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});

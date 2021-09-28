import 'match-media-mock';

import { renderWithTheme } from '~src/utils/tests/helpers';
import { BannerProps } from '../Banner/Banner';

import { BannerSlider } from './BannerSlider';

const props: BannerProps[] = [
  {
    img: '/assets/img/slide-1.jpg',
    title: 'Bem Vindo a BarberShop',
    subtitle: 'We Are BarberShop!',
    description: 'Enjoy the Ultimate Relaxed Grooming Experience For Men every time you step into the Boardroom',
    buttons: 2,
    buttonLabelOne: 'Marcar Hora',
    buttonLabelTwo: 'Saiba Mais'
  },
  {
    img: '/assets/img/slide-2.jpg',
    title: 'Bem Vindo a 98BarberShop',
    subtitle: 'We Are BarberShop!',
    description: 'Enjoy the Ultimate Relaxed Grooming Experience For Men every time you step into the Boardroom',
    buttons: 2,
    buttonLabelOne: 'Marcar Hora',
    buttonLabelTwo: 'Saiba Mais'
  }
];

jest.mock('~organisms/Banner/Banner', () => ({
  __esModule: true,
  Banner: function Mock() {
    return <div data-testid="Banner" />;
  }
}));

describe('<BannerSlider />', () => {
  it('Deve renderizar o componente <BannerSlider /> com a propriedade vertical', () => {
    //Arrange
    const { container } = renderWithTheme(<BannerSlider items={props} />);
    //Assert
    expect(container.querySelector('.slick-vertical')).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});

import 'match-media-mock';

import { screen } from '@testing-library/react';
import { renderWithTheme } from '~src/utils/tests/helpers';

import { MainServices } from './MainServices';

import services from './mock';

jest.mock('~molecules/ServiceBox/ServiceBox', () => ({
  __esModule: true,
  ServiceBox: function Mock() {
    return <div data-testid="Service Box" />;
  }
}));

describe('<MainServices />', () => {
  it('Deve renderizar o componente <MainServices />', () => {
    //Arrange
    const { container } = renderWithTheme(<MainServices items={services} />);
    //Assert
    expect(screen.getAllByTestId(/Service Box/i)).toHaveLength(services.length * 2);

    expect(container.firstChild).toMatchSnapshot();
  });
});

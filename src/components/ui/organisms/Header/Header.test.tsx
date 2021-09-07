import { renderWithTheme } from '~src/utils/tests/helpers';

import { Header } from './Header';

describe('<Header />', () => {
  it('Deve renderizar o componente <Header />', () => {
    //Arrange
    const { container } = renderWithTheme(<Header />);
    //Assert
    expect(container.firstChild).toMatchSnapshot();
  });
});

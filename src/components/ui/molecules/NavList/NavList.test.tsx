import { renderWithTheme } from '~src/utils/tests/helpers';

import { NavList } from './NavList';

describe('<NavList />', () => {
  it('Deve renderizar o componente <NavList />', () => {
    //Arrange
    const { container } = renderWithTheme(<NavList />);
    //Assert
    expect(container.firstChild).toMatchSnapshot();
  });
});

import { renderWithTheme } from '~src/utils/tests/helpers';

import { NavItem } from './NavItem';

describe('<NavItem />', () => {
  it('Deve renderizar o componente <NavItem />', () => {
    //Arrange
    const { container } = renderWithTheme(<NavItem>O melhor estar por vir!</NavItem>);
    //Assert
    expect(container.firstChild).toMatchSnapshot();
  });
});

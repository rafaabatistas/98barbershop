import { render } from '@testing-library/react';

import { NavList } from './NavList';

describe('<NavList />', () => {
  it('Deve renderizar o componente <NavList />', () => {
    //Arrange
    const { container } = render(<NavList />);
    //Assert
    expect(container.firstChild).toMatchSnapshot();
  });
});

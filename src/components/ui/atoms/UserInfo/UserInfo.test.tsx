import { screen } from '@testing-library/react';
import { renderWithTheme } from '~src/utils/tests/helpers';

import { UserInfo } from './UserInfo';

const props = {
  userImage: '/assets/img/testUser.png',
  userName: 'Gabriel Guedes'
};

describe('<UserInfo />', () => {
  it('Deve renderizar o componente <UserInfo />', () => {
    //Arrange
    const { container } = renderWithTheme(<UserInfo {...props} />);
    //Assert
    expect(screen.getByText(`-${props.userName}`)).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});

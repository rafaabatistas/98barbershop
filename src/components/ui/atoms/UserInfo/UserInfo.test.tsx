import { screen } from '@testing-library/react';
import { renderWithTheme } from '~src/utils/tests/helpers';

import { UserInfo } from './UserInfo';

const props = {
  name: 'Gabriel',
  surname: 'Guedes'
};

describe('<UserInfo />', () => {
  it('Deve renderizar o componente <UserInfo />', () => {
    //Arrange
    const { container } = renderWithTheme(<UserInfo {...props} />);
    //Assert
    expect(screen.getByText(`-${props.name} ${props.surname}`)).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});

import { screen } from '@testing-library/react';
import { renderWithTheme } from '~src/utils/tests/helpers';

import { UserInfo } from './UserInfo';

const props = {
  nome: 'Gabriel',
  sobrenome: 'Guedes'
};

describe('<UserInfo />', () => {
  it('Deve renderizar o componente <UserInfo />', () => {
    //Arrange
    const { container } = renderWithTheme(<UserInfo {...props} />);
    //Assert
    expect(screen.getByText(`-${props.nome} ${props.sobrenome}`)).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});

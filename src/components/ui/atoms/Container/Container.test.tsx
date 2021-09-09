import theme from '~src/styles/theme';
import { renderWithTheme } from '~src/utils/tests/helpers';

import { Container } from './Container';

describe('<Container />', () => {
  it('Deve renderizar o componente <Container />', () => {
    //Arrange
    const { container } = renderWithTheme(<Container />);
    //Assert
    expect(container.firstChild).toHaveStyleRule('max-width', theme.grid.container);

    expect(container.firstChild).toMatchSnapshot();
  });
});

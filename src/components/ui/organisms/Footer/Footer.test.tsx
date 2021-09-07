import { renderWithTheme } from '~src/utils/tests/helpers';

import { Footer } from './Footer';

describe('<Footer />', () => {
  it('Deve renderizar o componente <Footer />', () => {
    //Arrange
    const { container } = renderWithTheme(<Footer />);
    //Assert

    expect(container.firstChild).toMatchSnapshot();
  });
});

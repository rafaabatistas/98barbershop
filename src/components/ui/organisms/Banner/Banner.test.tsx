import { renderWithTheme } from '~src/utils/tests/helpers';

import { Banner } from './Banner';

describe('<Banner />', () => {
  it('Deve renderizar o componente <Banner />', () => {
    //Arrange
    const { container } = renderWithTheme(<Banner image="/assets/img/image-banner-1.jpg" />);
    //Assert
    expect(container.firstChild).toMatchSnapshot();
  });
});

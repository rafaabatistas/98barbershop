import { render } from '@testing-library/react';

import { Header } from './Header';

describe('<Header />', () => {
  it('Deve renderizar o componente <Header />', () => {
    //Arrange
    const { container } = render(<Header />);
    //Assert
    expect(container.firstChild).toMatchSnapshot();
  });
});

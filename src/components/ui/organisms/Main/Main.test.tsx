import { render } from '@testing-library/react';

import { Main } from './Main';

describe('<Main />', () => {
  it('Deve renderizar o componente <Main />', () => {
    //Arrange
    const { container } = render(<Main />);
    //Assert
    expect(container.firstChild).toMatchSnapshot();
  });
});

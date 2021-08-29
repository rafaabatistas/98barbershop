import { render } from '@testing-library/react';

import Home from './HomePage';

describe('<Home />', () => {
  it('Deve renderizar o componente <Home />', () => {
    const { container } = render(<Home />);

    expect(container.firstChild).toMatchSnapshot();
  });
});

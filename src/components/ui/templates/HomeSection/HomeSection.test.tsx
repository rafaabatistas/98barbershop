import { render } from '@testing-library/react';

import HomeSection from './HomeSection';

describe('<HomeSection />', () => {
  it('Deve renderizar o componente <HomeSection />', () => {
    const { container } = render(<HomeSection />);

    expect(container.firstChild).toMatchSnapshot();
  });
});

import { screen } from '@testing-library/react';
import { renderWithTheme } from '~src/utils/tests/helpers';

import { Background } from './Background';

const props = {
  src: '/assets/img/slide-1.jpg'
};

describe('<Background />', () => {
  it('Deve renderizar o componente <Background />', () => {
    //Arrange
    const { container } = renderWithTheme(
      <Background {...props}>
        <h1>Background</h1>
      </Background>
    );
    //Assert
    expect(screen.getByLabelText(/background/i)).toHaveStyle({
      'background-image': `url(${props.src})`
    });

    expect(screen.getByRole('heading', { name: 'Background' })).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});

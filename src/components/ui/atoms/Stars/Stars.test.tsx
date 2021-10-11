import { screen } from '@testing-library/react';
import { renderWithTheme } from '~src/utils/tests/helpers';

import { Stars } from './Stars';

describe('<Stars />', () => {
  it('Deve renderizar o componente <Stars />', () => {
    //Arrange
    const { container } = renderWithTheme(<Stars feedbackNote={5} />);
    //Assert
    expect(screen.getAllByLabelText(/Star/i)).toHaveLength(5);

    expect(container.firstChild).toMatchSnapshot();
  });
});

import { screen } from '@testing-library/react';
import { renderWithTheme } from '~src/utils/tests/helpers';
import contributors from '~organisms/SectionContributors/contributors.mock';

import { SectionContributors } from './SectionContributors';

describe('<SectionContributors />', () => {
  it('Deve renderizar o componente <SectionContributors />', () => {
    //Arrange
    const { container } = renderWithTheme(<SectionContributors contributors={contributors} />);
    //Assert
    expect(screen.getByRole('heading', { name: /Os Melhores/i })).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});

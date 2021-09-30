import { screen } from '@testing-library/react';
import { renderWithTheme } from '~src/utils/tests/helpers';
import theme from '~src/styles/theme';

import { tint } from 'polished';
import { HairIcon } from './HairIcon';

describe('<HairIcon />', () => {
  it('Deve renderizar o componente <HairIcon /> com a cor do cabelo ativo', () => {
    //Arrange
    const { container } = renderWithTheme(<HairIcon type="hair" />);
    //Assert
    expect(screen.getByLabelText(/Hair/i)).toHaveStyle({
      color: tint(0.4, theme.colors.primary)
    });

    expect(container.firstChild).toMatchSnapshot();
  });

  it('Deve renderizar o componente <HairIcon /> com a cor da barba ativo', () => {
    //Arrange
    renderWithTheme(<HairIcon type="baber" />);
    //Assert
    expect(screen.getByLabelText(/Baber/i)).toHaveStyle({
      color: tint(0.4, theme.colors.primary)
    });
  });

  it('Deve renderizar o componente <HairIcon /> com a cor do cabelo e barba ativo', () => {
    //Arrange
    renderWithTheme(<HairIcon type="full" />);
    //Assert
    expect(screen.getByLabelText(/Hair/i)).toHaveStyle({
      color: tint(0.4, theme.colors.primary)
    });
    expect(screen.getByLabelText(/Baber/i)).toHaveStyle({
      color: tint(0.4, theme.colors.primary)
    });
  });
});

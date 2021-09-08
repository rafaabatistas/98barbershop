import { screen } from '@testing-library/react';
import theme from '~src/styles/theme';
import { renderWithTheme } from '~src/utils/tests/helpers';

import { MenuMobile } from './MenuMobile';

describe('<MenuMobile />', () => {
  it('Deve renderizar os links do componente <MenuMobile />', () => {
    const { container } = renderWithTheme(<MenuMobile isOpen={true} />);

    expect(screen.getByLabelText(/Home/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Sobre/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Serviços/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Equipe/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Opinião/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/FeedBack/i)).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('Deve mudar a cor do link para a cor principal quando tiver Hover no componente <MenuMobile />', () => {
    renderWithTheme(<MenuMobile isOpen={true} />);

    expect(screen.getByLabelText(/Sobre/i)).toHaveStyleRule('color', theme.colors.primary, {
      modifier: ':hover'
    });
  });
});

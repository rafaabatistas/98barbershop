import { screen, fireEvent } from '@testing-library/react';
import theme from '~src/styles/theme';
import { renderWithTheme } from '~src/utils/tests/helpers';

import { MenuMobile } from './MenuMobile';

describe('<MenuMobile />', () => {
  it('Deve renderizar os links do componente <MenuMobile />', () => {
    const props = {
      isOpen: true,
      setIsOpen: jest.fn()
    };
    const { container } = renderWithTheme(<MenuMobile {...props} />);

    //Assert
    expect(screen.getByLabelText(/Home/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Sobre/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Serviços/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Equipe/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Opinião/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/FeedBack/i)).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('Deve mudar a cor do link para a cor principal quando tiver Hover no componente <MenuMobile />', () => {
    const props = {
      isOpen: true,
      setIsOpen: jest.fn()
    };
    renderWithTheme(<MenuMobile {...props} />);

    expect(screen.getByLabelText(/Sobre/i)).toHaveStyleRule('color', theme.colors.primary, {
      modifier: ':hover'
    });
  });

  it('Verificar chamada da função onClick nos links componente <MenuMobile />', () => {
    const props = {
      isOpen: true,
      setIsOpen: jest.fn()
    };
    renderWithTheme(<MenuMobile {...props} />);
    //Arrange
    const linkHome = screen.getByLabelText(/Home/i);
    const linkSobre = screen.getByLabelText(/Sobre/i);
    const linkServicos = screen.getByLabelText(/Serviços/i);
    const linkEquipe = screen.getByLabelText(/Equipe/i);
    const linkOpiniao = screen.getByLabelText(/Opinião/i);
    const linkFeedBack = screen.getByLabelText(/FeedBack/i);
    //Act
    fireEvent.click(linkHome);
    fireEvent.click(linkSobre);
    fireEvent.click(linkServicos);
    fireEvent.click(linkEquipe);
    fireEvent.click(linkOpiniao);
    fireEvent.click(linkFeedBack);
    //Assert
    expect(props.setIsOpen).toHaveBeenCalled();
    expect(props.setIsOpen).toHaveBeenCalledTimes(6);
  });
});

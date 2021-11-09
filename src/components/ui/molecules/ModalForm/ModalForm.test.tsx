import { screen, fireEvent } from '@testing-library/react';
import { renderWithTheme } from '~src/utils/tests/helpers';

import { ModalForm, ModalFormProps } from './ModalForm';

describe('<ModalForm />', () => {
  it('Deve renderizar o componente <ModalForm /> com a mensagem de sucesso', () => {
    //Arrange
    const props: ModalFormProps = {
      isOpen: true,
      status: 'success',
      onClick: jest.fn()
    };
    const { container } = renderWithTheme(<ModalForm {...props} />);
    const title = screen.getByRole('heading', { name: 'Sucesso!' });
    const description = screen.getByText('Muito obrigado por deixar sua avaliação.');
    const image = screen.getByAltText('Ícone');
    const button = screen.getByRole('button', { name: 'Concluir' });
    //Assert
    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/assets/svg/icon-success.svg');
    expect(button).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Deve renderizar o componente <ModalForm /> com a mensagem de erro', () => {
    //Arrange
    const props: ModalFormProps = {
      isOpen: true,
      status: 'error',
      onClick: jest.fn()
    };
    renderWithTheme(<ModalForm {...props} />);
    const title = screen.getByRole('heading', { name: 'Erro.' });
    const description = screen.getByText('Ocorreu um erro ao enviar a avaliação. Tente outra vez mais tarde.');
    const image = screen.getByAltText('Ícone');
    //Assert
    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/assets/svg/icon-error.svg');
  });

  it('Deve verificar a chamada da função do button do componente <ModalForm />', () => {
    //Arrange
    const props: ModalFormProps = {
      isOpen: true,
      status: 'success',
      onClick: jest.fn()
    };
    renderWithTheme(<ModalForm {...props} />);
    const button = screen.getByRole('button', { name: 'Concluir' });
    //Act
    fireEvent.click(button);
    //Assert
    expect(props.onClick).toHaveBeenCalled();
  });

  it('Deve verificar se o componente <ModalForm /> está visível', () => {
    //Arrange
    const props: ModalFormProps = {
      isOpen: true,
      status: 'error',
      onClick: jest.fn()
    };
    renderWithTheme(<ModalForm {...props} />);
    const overlayModal = screen.getByLabelText('Overlay Modal');
    const modal = screen.getByLabelText('Modal');
    //Assert
    expect(overlayModal).toBeInTheDocument();
    expect(modal).toBeInTheDocument();
    expect(overlayModal).toHaveAttribute('aria-hidden', 'true');
    expect(overlayModal).toHaveStyle({ opacity: 0.9, visibility: 'visible', pointerEvents: 'all' });
    expect(modal).toHaveStyle({ opacity: 1, visibility: 'visible', pointerEvents: 'all' });
  });

  it('Deve verificar se o componente <ModalForm /> não está visível', () => {
    //Arrange
    const props: ModalFormProps = {
      isOpen: false,
      status: 'error',
      onClick: jest.fn()
    };
    renderWithTheme(<ModalForm {...props} />);
    const overlayModal = screen.getByLabelText('Overlay Modal');
    const modal = screen.getByLabelText('Modal');
    //Assert
    expect(overlayModal).toBeInTheDocument();
    expect(modal).toBeInTheDocument();
    expect(overlayModal).toHaveAttribute('aria-hidden', 'false');
    expect(overlayModal).toHaveStyle({ opacity: 0, visibility: 'hidden', pointerEvents: 'none' });
    expect(modal).toHaveStyle({ opacity: 0, visibility: 'hidden', pointerEvents: 'none' });
  });
});

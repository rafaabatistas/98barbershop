import * as S from './ModalForm.styles';

import { Button } from '../../atoms/Button/Button';

export type ModalFormProps = {
  isOpen: boolean;
  status: 'success' | 'error';
  onClick: (isOpen: boolean) => void;
};

export const ModalForm = ({ status, isOpen, onClick }: ModalFormProps) => {
  const mapIcon = {
    success: '/assets/svg/icon-success.svg',
    error: '/assets/svg/icon-error.svg'
  };

  const mapTitle = {
    success: 'Sucesso!',
    error: 'Erro.'
  };

  const mapMessage = {
    success: 'Muito obrigado por deixar sua avaliação.',
    error: 'Ocorreu um erro ao enviar a avaliação. Tente outra vez mais tarde.'
  };

  return (
    <>
      <S.Background aria-hidden={isOpen} aria-label="Overlay Modal" isOpen={isOpen} />
      <S.Modal isOpen={isOpen} aria-label="Modal">
        <S.Icon src={mapIcon[status]} alt="Ícone" />
        <S.Title>{mapTitle[status]}</S.Title>
        <S.Description>{mapMessage[status]}</S.Description>
        <Button as="button" type="button" onClick={() => onClick(!isOpen)}>
          Concluir
        </Button>
      </S.Modal>
    </>
  );
};

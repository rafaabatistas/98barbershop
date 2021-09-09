import * as S from './MenuMobile.styles';

export type MenuMobileProps = {
  isOpen: boolean;
};

export const MenuMobile = ({ isOpen }: MenuMobileProps) => {
  return (
    <S.Wrapper aria-hidden={!isOpen} aria-label="Menu Full" isOpen={isOpen}>
      <S.WrapperList>
        <S.List>
          <S.Link aria-label="Home">Home</S.Link>
        </S.List>
        <S.List>
          <S.Link aria-label="Sobre">Sobre</S.Link>
        </S.List>
        <S.List>
          <S.Link aria-label="Serviços">Serviços</S.Link>
        </S.List>
        <S.List>
          <S.Link aria-label="Equipe">Equipe</S.Link>
        </S.List>
        <S.List>
          <S.Link aria-label="Opinião">Opinião</S.Link>
        </S.List>
        <S.List>
          <S.Link aria-label="FeedBack">FeedBack</S.Link>
        </S.List>
      </S.WrapperList>
    </S.Wrapper>
  );
};

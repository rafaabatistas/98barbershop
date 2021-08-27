import * as S from './Title.styles';

type TitleProps = {
  icon: string;
  alt: string;
  title: string;
};

export const Title = ({ icon, alt, title }: TitleProps) => {
  return (
    <S.Wrapper>
      <S.Icon src={icon} alt={alt} />
      <S.Title>{title}</S.Title>
    </S.Wrapper>
  );
};

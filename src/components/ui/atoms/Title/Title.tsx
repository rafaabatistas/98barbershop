import * as S from './Title.styles';

export type TitleProps = {
  children: React.ReactNode;
  size?: 'normal' | 'large';
  textAlign?: 'center' | 'left';
};

export const Title = ({ children, size = 'normal', textAlign = 'center' }: TitleProps) => (
  <S.Title size={size} textAlign={textAlign}>
    {children}
  </S.Title>
);

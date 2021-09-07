import * as S from './Title.styles';

export type TitleProps = {
  children: React.ReactNode;
  size?: 'normal' | 'large';
};

export const Title = ({ children, size = 'normal' }: TitleProps) => <S.Title size={size}>{children}</S.Title>;

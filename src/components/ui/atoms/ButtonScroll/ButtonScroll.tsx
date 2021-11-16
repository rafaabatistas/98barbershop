import * as S from './ButtonScroll.styles';

export type ButtonScrollProps = {
  buttonStyle?: 'primary' | 'secondary';
  children: React.ReactNode;
  marginLeft?: 'small' | 'medium' | 'large' | 'big';
  to: string;
};

export const ButtonScroll = ({ children, to, buttonStyle = 'primary', marginLeft }: ButtonScrollProps) => (
  <S.Wrapper buttonStyle={buttonStyle} to={to} marginLeft={marginLeft} data-testid="button-scroll">
    {children}
  </S.Wrapper>
);

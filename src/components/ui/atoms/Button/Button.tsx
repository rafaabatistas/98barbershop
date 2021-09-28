import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import * as S from './Button.styles';

type ButtonTypes = AnchorHTMLAttributes<HTMLAnchorElement> | ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  buttonStyle?: 'primary' | 'secondary';
  as?: React.ElementType;
} & ButtonTypes;

export const Button = ({ children, buttonStyle = 'primary', ...props }: ButtonProps) => (
  <S.Wrapper buttonStyle={buttonStyle} {...props}>
    {children}
  </S.Wrapper>
);

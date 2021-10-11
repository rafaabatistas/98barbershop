import styled, { css, DefaultTheme } from 'styled-components';
import { Link } from 'react-scroll';
import { darken } from 'polished';

import { ButtonScrollProps } from './ButtonScroll';

const buttonStylesModifiers = {
  primary: (theme: DefaultTheme) => css`
    background: ${theme.colors.secondary};
    border: 0.2rem solid ${theme.colors.secondary};

    &:hover {
      background: ${darken(0.2, theme.colors.secondary)};
      border: 0.2rem solid ${darken(0.2, theme.colors.secondary)};
    }
  `,

  secondary: (theme: DefaultTheme) => css`
    background: rgba(255, 255, 255, 0.12);
    border: 0.2rem solid ${theme.colors.white};
    backdrop-filter: blur(4px);

    &:hover {
      background: ${darken(0.2, theme.colors.secondary)};
      border: 0.2rem solid ${darken(0.2, theme.colors.secondary)};
    }
  `
};

export const Wrapper = styled(Link).attrs({
  spy: true,
  hashSpy: true,
  smooth: true,
  duration: 600,
  autoFocus: true
})<ButtonScrollProps>`
  ${({ theme, buttonStyle, marginLeft }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
    font-weight: 600;
    padding: 1rem 2rem;
    border-radius: 4rem;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s linear;
    margin-left: ${!!marginLeft && theme.spacings[marginLeft!]};

    ${buttonStylesModifiers[buttonStyle!](theme)}
  `}
`;

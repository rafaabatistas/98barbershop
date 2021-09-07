import styled, { css, DefaultTheme } from 'styled-components';
import media from 'styled-media-query';
import { TitleProps } from './Title';

const titleModifiers = {
  normal: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xbig};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xlarge};
    `}
  `,

  large: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.large};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge};
    `}
  `
};

export const Title = styled.h2<TitleProps>`
  ${({ theme, size }) => css`
    color: ${theme.colors.primary};
    font-family: ${theme.font.family.primary};
    font-weight: ${theme.font.regular};

    ${!!size && titleModifiers[size!](theme)}
  `}
`;

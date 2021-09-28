import styled, { css, DefaultTheme } from 'styled-components';
import media from 'styled-media-query';
import { TitleProps } from './Title';

const titleModifiers = {
  normal: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xbig};
    margin-bottom: 0.5rem;

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xlarge};
      margin-bottom: ${theme.spacings.xsmall};
    `}
  `,

  large: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.large};
    margin-bottom: ${theme.spacings.xsmall};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge};
    `}
  `
};

export const Title = styled.h1<TitleProps>`
  ${({ theme, size }) => css`
    color: ${theme.colors.primary};
    font-family: ${theme.font.family.primary};
    font-weight: ${theme.font.regular};
    text-align: center;

    ${!!size && titleModifiers[size!](theme)}
  `}
`;

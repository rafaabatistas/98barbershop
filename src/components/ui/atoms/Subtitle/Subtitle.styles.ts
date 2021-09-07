import styled, { css, DefaultTheme } from 'styled-components';
import media from 'styled-media-query';

import { TitleProps } from '~atoms/Title/Title';

const subtitleModifiers = {
  normal: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xxbig};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge};
    `}
  `,

  large: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xxbig};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.extra};
    `}
  `
};

export const Subtitle = styled.h2<TitleProps>`
  ${({ theme, size }) => css`
    max-width: 105rem;
    color: ${theme.colors.white};
    font-family: ${theme.font.family.secundary};
    font-weight: ${theme.font.light};

    ${!!size && subtitleModifiers[size!](theme)}
  `}
`;

import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import { LogotipoProps } from './Logotipo';

const wrapperModifiers = {
  small: () => css`
    width: 3.6rem;
    height: 4.8rem;
  `,

  normal: () => css`
    width: 6rem;
    height: 8rem;
  `,

  large: () => css`
    width: 8.5rem;
    height: 12rem;
  `,

  hideOnMobile: () => css`
    ${media.lessThan('medium')`
      width: 3.6rem;
      height: 4.8rem;
    `}
  `
};

export const Wrapper = styled.div<LogotipoProps>`
  ${({ theme, color, size, hideOnMobile }) => css`
    color: ${theme.colors[color!]};
    cursor: pointer;

    ${media.greaterThan('medium')`
      margin: 0 ${theme.spacings.huge};
    `}

    ${!!size && wrapperModifiers[size]}
    ${!!hideOnMobile && wrapperModifiers.hideOnMobile}
  `}
`;

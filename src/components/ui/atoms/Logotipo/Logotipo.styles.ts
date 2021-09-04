import styled, { css } from 'styled-components';

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
  `
};

export const Wrapper = styled.div<LogotipoProps>`
  ${({ theme, color, size }) => css`
    color: ${theme.colors[color!]};

    ${!!size && wrapperModifiers[size]}
  `}
`;

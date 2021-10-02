import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import { BackgroundProps } from './Background';

export const Wrapper = styled.div<BackgroundProps>`
  ${({ src }) => css`
    position: relative;
    background-image: url(${src});
    background-position: center;
    background-size: cover;
    padding: 5rem 1.5rem;
    overflow: hidden;

    ${media.greaterThan('medium')`
      padding: 10rem 1.5rem;
    `}
  `}
`;

export const ArrowMoldingUp = styled.svg`
  ${({ theme }) => css`
    position: absolute;
    width: 5rem;
    color: ${theme.colors.darkGray};
    top: -0.1rem;
    left: 50%;
    transform: translate(-50%, 0);
  `}
`;

export const ArrowMoldingDown = styled.svg`
  ${({ theme }) => css`
    position: absolute;
    width: 5rem;
    color: ${theme.colors.darkGray};
    bottom: -0.1rem;
    left: 50%;
    transform: translate(-50%, 0);
  `}
`;

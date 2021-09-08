import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Header = styled.header`
  ${({ theme }) => css`
    width: 100%;
    height: 7.2rem;
    z-index: ${theme.layers.base};
    position: fixed;
    display: flex;
    align-items: center;
    background: rgba(0, 0, 0, 0.3);
    border-bottom: 0.3rem solid rgba(255, 255, 255, 0.3);
    border-radius: 0 0 2rem 2rem;

    ${media.greaterThan('small')`
      height: 10rem;
    `}
  `}
`;

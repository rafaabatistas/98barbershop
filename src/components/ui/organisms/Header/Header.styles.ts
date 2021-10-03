import styled, { css } from 'styled-components';
import { customMedia } from '~src/utils/media/customMedia';

export const Header = styled.header`
  ${({ theme }) => css`
    width: 100%;
    height: 7.2rem;
    z-index: ${theme.layers.base};
    position: fixed;
    display: flex;
    align-items: center;
    box-shadow: inset 0 -0.3rem 0 rgba(255, 255, 255, 0.18);
    border-radius: 0 0 2rem 2rem;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0.3rem;
      border-radius: 0 0 2rem 2rem;
      background: rgba(0, 0, 0, 0.3);
      backdrop-filter: blur(1rem);
    }

    ${customMedia.greaterThan('medium')`
      height: 10rem;
    `}
  `}
`;

import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    gap: 0.5rem;

    svg {
      width: 1.5rem;
      color: ${theme.colors.primary};

      ${media.greaterThan('medium')`
        width: 2rem;
      `}
    }

    ${media.lessThan('medium')`
      margin: 2rem 0 1rem 0;
    `}
  `}
`;

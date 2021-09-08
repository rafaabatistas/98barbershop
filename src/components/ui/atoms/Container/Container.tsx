import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.grid.container};
    margin: 0 15px;

    ${media.greaterThan('small')`
      margin-left: auto;
      margin-right: auto;
    `}
  `}
`;

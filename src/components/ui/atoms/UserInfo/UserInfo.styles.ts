import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Name = styled.p`
  ${({ theme }) => css`
    text-transform: capitalize;
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.thin};
    color: ${theme.colors.textName};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.small};
    `}
  `}
`;

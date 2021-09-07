import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const NavItem = styled.button`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.regular};
    font-family: ${theme.font.family.tertiary};
    background-color: transparent;
    text-decoration: none;
    transition: all 0.5s ease-out;

    &:hover {
      color: ${theme.colors.primary};
    }

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.medium};
    `}
  `}
`;

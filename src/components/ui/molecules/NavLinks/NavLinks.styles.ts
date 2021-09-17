import media from 'styled-media-query';
import styled, { css } from 'styled-components';

type ActiveProps = {
  active?: boolean;
};

export const Wrapper = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;

  ${media.greaterThan('medium')`
    width: auto;
  `}
`;

export const Line = styled.span`
  ${({ theme }) => css`
    height: 0.3rem;
    position: absolute;
    bottom: 0;
    left: 0;
    background: ${theme.colors.primary};
    border-radius: 0.3rem;
    transition: all 0.3s linear;
    box-shadow: 0 0 1rem ${theme.colors.primary};
  `}
`;

export const WrapperUl = styled.ul`
  display: flex;
  gap: 4rem;
`;

export const List = styled.li`
  list-style: none;
`;

export const Link = styled.a<ActiveProps>`
  ${({ theme, active }) => css`
    text-decoration: none;
    font-size: ${theme.font.sizes.medium};
    color: ${active ? theme.colors.primary : theme.colors.white};
    text-shadow: ${active && `0 0 1rem ${theme.colors.primary}`};
    transition: 0.3s linear;
    cursor: pointer;

    &:hover,
    &:focus {
      color: ${theme.colors.primary};
      text-shadow: 0 0 1rem ${theme.colors.primary};
      outline: none;
    }
  `}
`;

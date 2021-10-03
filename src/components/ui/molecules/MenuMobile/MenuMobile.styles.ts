import styled, { css } from 'styled-components';
import { Link } from 'react-scroll';

import { MenuMobileProps } from './MenuMobile';

type OpenMenuMobileProps = Pick<MenuMobileProps, 'isOpen'>;

type ListProps = {
  isActive: boolean;
};

export const Wrapper = styled.div<OpenMenuMobileProps>`
  ${({ theme, isOpen }) => css`
    background: ${theme.colors.darkGray};
    opacity: ${isOpen ? 0.9 : 0};
    pointer-events: ${isOpen ? 'all' : 'none'};
    transition: 0.3s linear;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: calc(4.8rem + (1.5rem + 1.5rem));
    z-index: ${theme.layers.menu};
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-y: auto;
    overflow-x: hidden;
  `}
`;

export const WrapperList = styled.ul`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${theme.spacings.medium};
  `}
`;

export const List = styled.li<ListProps>`
  ${({ theme, isActive }) => css`
    position: relative;
    list-style: none;
    text-align: center;
    display: flex;
    justify-content: center;
    color: ${isActive ? theme.colors.primary : theme.colors.white};

    &::after {
      content: '';
      position: absolute;
      justify-self: center;
      bottom: -0.5rem;
      height: 0.2rem;
      width: ${isActive ? '100%' : `0`};
      background: ${theme.colors.primary};
      box-shadow: 0 0 1rem ${theme.colors.primary};
      transition: 0.3s linear;
    }

    &:hover::after,
    &:focus::after {
      width: 100%;
    }
  `}
`;

export const MenuLink = styled(Link).attrs({
  spy: true,
  hashSpy: true,
  smooth: true,
  duration: 600,
  activeClass: 'active',
  autoFocus: true
})`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xmedium};
    font-weight: 300;
    padding: 0 1rem;
    transition: 0.3s linear;

    &:hover,
    &:focus {
      color: ${theme.colors.primary};
      cursor: pointer;
      text-shadow: 0 0 3rem rgba(26, 255, 234, 0.2), 0 0 1.5rem rgba(26, 255, 234, 0.4),
        0 0 1rem rgba(26, 255, 234, 0.4), 0 0 5rem rgba(26, 255, 234, 0.2);
    }
  `}
`;

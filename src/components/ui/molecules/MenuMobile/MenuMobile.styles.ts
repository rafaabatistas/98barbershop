import styled, { css } from 'styled-components';

import { MenuMobileProps } from './MenuMobile';

type OpenMenuMobileProps = Pick<MenuMobileProps, 'isOpen'>;

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

export const List = styled.li`
  ${({ theme }) => css`
    position: relative;
    list-style: none;
    text-align: center;
    display: flex;
    justify-content: center;

    &:first-child::after {
      width: 100%;
    }

    &:first-child {
      color: ${theme.colors.primary};
      text-shadow: 0px 0px 30px rgba(247, 24, 18, 0.5), 0px 0px 15px rgba(247, 24, 18, 0.4),
        0px 0px 10px rgba(247, 24, 18, 0.4), 0px 0px 5px rgba(247, 24, 18, 0.2);
    }

    &::after {
      content: '';
      position: absolute;
      justify-self: center;
      bottom: -0.5rem;
      width: 0;
      height: 0.2rem;
      background: ${theme.colors.primary};
      box-shadow: 0px 0px 10px ${theme.colors.primary};
      transition: 0.3s linear;
    }

    &:hover::after,
    &:focus::after {
      width: 100%;
    }
  `}
`;

export const Link = styled.a`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xmedium};
    font-weight: 300;
    padding: 0 1rem;
    transition: 0.3s linear;

    &:hover,
    &:focus {
      color: ${theme.colors.primary};
      cursor: pointer;
      text-shadow: 0px 0px 30px rgba(247, 24, 18, 0.5), 0px 0px 15px rgba(247, 24, 18, 0.4),
        0px 0px 10px rgba(247, 24, 18, 0.4), 0px 0px 5px rgba(247, 24, 18, 0.2);
    }
  `}
`;

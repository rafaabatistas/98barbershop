import styled, { css } from 'styled-components';
import media from 'styled-media-query';
import { Link } from 'react-scroll';

import { ArrowUp } from '@styled-icons/bootstrap/ArrowUp';

import { Container } from '~atoms/Container/Container';

type DescriptionProps = {
  size: 'small' | 'normal';
};

const diplayFlex = css`
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 1;
`;

export const Footer = styled.footer`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    background: ${theme.colors.gray};
    color: white;

    ${Container} {
      display: flex;
      flex-direction: column;
      gap: 5rem;
      padding: 5rem 0;

      ${media.greaterThan('medium')`
        flex-direction: row;
        justify-content: space-between;
        padding: 10rem 0rem;
      `}
    }
  `}
`;

export const BoxLogo = styled.div`
  ${diplayFlex};
  gap: 2rem;

  ${media.greaterThan('medium')`
      order: 2;
    `}
`;

export const BoxInfoSocialMedia = styled.div`
  ${diplayFlex};
  order: 1;

  ${media.greaterThan('medium')`
    order: 1;
  `}
`;

export const BoxInfoLocation = styled.div`
  ${({ theme }) => css`
    ${diplayFlex};
    position: relative;
    order: 3;
    gap: 2rem;
    background: ${theme.colors.darkGray};
    background-attachment: fixed;
    padding: 3rem 1.5rem;

    ${media.greaterThan('medium')`
      order: 2;
    `};
  `}
`;

export const Curve = styled.svg`
  ${({ theme }) => css`
    width: 10rem;
    position: absolute;
    bottom: 99.5%;
    color: ${theme.colors.darkGray};
  `}
`;

export const Description = styled.p<DescriptionProps>`
  ${({ theme, size }) => css`
    font-size: ${size === 'small' ? theme.font.sizes.xxsmall : theme.font.sizes.xsmall};
    color: ${theme.colors.white};
    text-align: center;

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.medium};
    `}

    span {
      ${({ theme }) => css`
        color: ${theme.colors.primary};
      `}
    }
  `}
`;

export const BoxIcon = styled(Link).attrs({
  spy: true,
  hashSpy: true,
  smooth: true,
  duration: 600,
  autoFocus: true
})`
  ${({ theme }) => css`
    position: absolute;
    width: 5rem;
    display: flex;
    justify-content: center;
    bottom: calc(99.5% - 1.5rem);
    cursor: pointer;

    svg {
      transition: linear 0.3s;
    }

    &:hover svg,
    &:focus svg {
      color: ${theme.colors.primary};
    }
  `}
`;

export const Arrow = styled(ArrowUp)`
  ${({ theme }) => css`
    color: ${theme.colors.white};
  `}
`;

export const BoxInfoInstitutional = styled.div`
  ${({ theme }) => css`
    ${diplayFlex};
    order: 2;

    a {
      font-size: ${theme.font.sizes.medium};
      color: ${theme.colors.white};
      text-decoration: none;

      &:not(:last-child) {
        margin-bottom: 2rem;
      }

      &:hover,
      &:focus {
        text-decoration: underline;
        outline: none;
      }
    }

    ${media.greaterThan('medium')`
      order: 3;
    `}
  `}
`;

export const BoxSocialMedia = styled.div`
  display: flex;
  justify-content: center;
`;

export const Heading = styled.h3`
  ${({ theme }) => css`
    font-family: ${theme.font.family.tertiary};
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.xmedium};
    margin-bottom: 3rem;
  `}
`;

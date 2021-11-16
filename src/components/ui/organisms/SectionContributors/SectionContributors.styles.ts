import styled, { css } from 'styled-components';
import media from 'styled-media-query';
import { Container } from '~atoms/Container/Container';

export const Wrapper = styled.section`
  ${media.greaterThan('huge')`
    min-height: 106rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `}
`;

export const ContainerContributors = styled(Container)`
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
`;

export const BoxContributors = styled.div`
  max-width: 15.5rem;
  height: 28.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;

  ${media.greaterThan('small')`
    max-width: 32rem;
    height: 52.2rem;    
  `}

  ${media.greaterThan('medium')`
    max-width: 41rem;
    height: 64.2rem;
  `}
`;

export const Image = styled.img`
  ${({ theme }) => css`
    width: 15.5rem;
    height: 22rem;
    object-fit: cover;
    border-radius: ${theme.border.radius.light};
    background-size: cover;
    background-position: center;

    ${media.greaterThan('small')`
      width: 32rem;
      height: 40.2rem;
    `}

    ${media.greaterThan('medium')`
      width: 41rem;
      height: 54.6rem;
    `}
  `}
`;

export const Name = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-family: ${theme.font.family.tertiary};
    font-weight: ${theme.font.medium};
    font-size: ${theme.font.sizes.medium};
    line-height: ${theme.spacings.small};
    margin: 3rem 0 1.4rem;

    ${media.greaterThan('small')`
      font-size: ${theme.font.sizes.big};
      line-height: ${theme.spacings.medium};
    `}
  `}
`;

export const Occupation = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.textName};
    font-family: ${theme.font.family.tertiary};
    font-weight: ${theme.font.light};
    font-size: ${theme.font.sizes.xsmall};
    line-height: ${theme.spacings.xsmall};
    font-style: italic;

    ${media.greaterThan('small')`
      font-size: ${theme.font.sizes.medium};
    `}
  `}
`;

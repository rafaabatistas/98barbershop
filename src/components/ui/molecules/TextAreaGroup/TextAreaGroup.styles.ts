import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  order: 2;
  width: 100%;
  max-width: 52rem;
  height: 20.1rem;
  padding-top: 2rem;
  position: relative;

  ${media.greaterThan('medium')`
    height: 31.1rem;
  `}

  ${media.greaterThan('large')`
    order: 1;
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-family: ${theme.font.family.tertiary};
    font-weight: ${theme.font.regular};
    font-size: ${theme.font.sizes.small};
    line-height: ${theme.spacings.small};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.medium};
    `}
  `};
`;

export const TextArea = styled.textarea`
  ${({ theme }) => css`
    width: 100%;
    height: 15.1rem;
    border: none;
    outline: none;
    resize: none;
    padding: 0.2rem;
    font-size: ${theme.font.sizes.small};
    font-family: ${theme.font.family.tertiary};
    font-weight: ${theme.font.regular};
    background-color: transparent;
    color: ${theme.colors.white};
    border-bottom: 3px solid ${theme.colors.gray};

    &::placeholder {
      opacity: 0;
      transition: 0.3s;
    }

    &:focus::placeholder {
      opacity: 1;
    }

    ${media.greaterThan('medium')`
      height: 26.1rem;
    `}
  `}
`;

export const MaxLength = styled.span`
  ${({ theme }) => css`
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xsmall};
    font-family: ${theme.font.family.tertiary};
    font-weight: ${theme.font.regular};
  `};
`;

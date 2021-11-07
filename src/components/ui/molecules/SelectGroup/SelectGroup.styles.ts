import styled, { css } from 'styled-components';
import media from 'styled-media-query';
import { SelectGroupProps } from './SelectGroup';

type WrapperProps = Pick<SelectGroupProps, 'marginBottom'>;

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, marginBottom }) => css`
    width: 100%;
    max-width: 52rem;
    height: 5.3rem;
    padding-top: 0.5rem;
    margin-bottom: ${!!marginBottom && theme.spacings.xsmall};
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

export const Select = styled.select`
  ${({ theme }) => css`
    width: 100%;
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

    option {
      border: none;
      border: 0;
      color: ${theme.colors.white};
      background-color: ${theme.colors.darkGray};
    }
  `};
`;

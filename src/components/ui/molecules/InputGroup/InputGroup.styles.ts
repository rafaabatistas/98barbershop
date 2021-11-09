import styled, { css } from 'styled-components';
import media from 'styled-media-query';
import { InputGroupProps } from './InputGroup';

type WrapperProps = Pick<InputGroupProps, 'marginBottom'>;

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, marginBottom }) => css`
    width: 100%;
    max-width: 52rem;
    height: 5.3rem;
    margin-bottom: ${!!marginBottom && theme.spacings.xsmall};
    position: relative;
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
    position: absolute;
    top: 2rem;
    left: 0;
    color: ${theme.colors.white};
    font-family: ${theme.font.family.tertiary};
    font-weight: ${theme.font.regular};
    font-size: ${theme.font.sizes.small};
    line-height: ${theme.spacings.small};
    transition: 0.3s;

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.medium};
    `}

    span {
      font-size: ${theme.font.sizes.xsmall};
    }
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    width: 100%;
    border: none;
    outline: none;
    position: absolute;
    appearance: none;
    top: 3rem;
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

    &:focus ~ label,
    &:valid ~ label {
      transform: translateY(-2rem);
      font-size: 1.3em;
      letter-spacing: 0.1em;
    }

    &:-webkit-autofill {
      -webkit-border: none;
      -webkit-box-shadow: 0 0 0 30px ${theme.colors.darkGray} inset;
      -webkit-text-fill-color: ${theme.colors.white} !important;
    }
  `}
`;

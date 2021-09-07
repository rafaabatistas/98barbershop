import styled, { css } from 'styled-components';
import { DescriptionProps } from './Description';

const descriptionModifiers = {
  marginBottom: () => css`
    margin-bottom: 2.5rem;
  `
};

export const Description = styled.p<DescriptionProps>`
  ${({ theme, size, marginBottom }) => css`
    font-size: ${theme.font.sizes[size!]};
    font-family: ${theme.font.family.tertiary};
    font-weight: ${theme.font.light};
    text-align: center;

    ${!!marginBottom && descriptionModifiers.marginBottom}

    & span {
      ${({ theme }) => css`
        color: ${theme.colors.primary};
      `}
    }
  `}
`;

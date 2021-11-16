import styled, { css } from 'styled-components';
import { DescriptionProps } from './Description';

const descriptionModifiers = {
  marginBottom: () => css`
    margin-bottom: 4.5rem;
  `
};

export const Description = styled.p<DescriptionProps>`
  ${({ theme, size, color, marginBottom }) => css`
    font-size: ${theme.font.sizes[size!]};
    font-family: ${theme.font.family.tertiary};
    font-weight: ${theme.font.light};
    text-align: center;
    color: ${theme.colors[color!]};

    ${!!marginBottom && descriptionModifiers.marginBottom}

    & span {
      ${({ theme }) => css`
        color: ${theme.colors.primary};
      `}
    }
  `}
`;

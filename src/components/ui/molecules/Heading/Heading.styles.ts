import styled, { css } from 'styled-components';

type WrapperButtonsProps = {
  hasChildren: boolean;
};

export const WrapperButtons = styled.div<WrapperButtonsProps>`
  ${({ theme, hasChildren }) => css`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: ${theme.spacings.medium};

    margin-top: ${hasChildren && theme.spacings.medium};
  `}
`;

import styled, { css } from 'styled-components';
import { SocialMediaProps } from './SocialMedia';

const socialMediaModifiers = {
  marginRight: () => css`
    margin-right: 2rem;
  `
};

type SocialProps = Pick<SocialMediaProps, 'marginRight'>;

export const SocialMedia = styled.div<SocialProps>`
  ${({ theme, marginRight }) => css`
    width: 50px;
    height: 50px;
    background-color: ${theme.colors.gray};
    border-radius: 50%;

    ${!!marginRight && socialMediaModifiers.marginRight}
  `}
`;

export const WraperImage = styled.a`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s linear;

    &:hover,
    &:focus {
      box-shadow: 0 0 1rem ${theme.colors.primary};
      outline: none;
    }
  `}
`;

export const Image = styled.img`
  width: 20px;
  height: 20px;
`;

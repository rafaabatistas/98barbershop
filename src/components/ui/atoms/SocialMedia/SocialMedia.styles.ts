import styled, { css } from 'styled-components';
import { SocialMediaProps } from './SocialMedia';

const socialMediaModifiers = {
  marginRight: () => css`
    margin-right: 2rem;
  `
};

type SocialProps = Pick<SocialMediaProps, 'marginRight'>;

export const SocialMedia = styled.a<SocialProps>`
  ${({ theme, marginRight }) => css`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: ${theme.colors.gray};
    display: flex;
    align-items: center;
    justify-content: center;

    ${!!marginRight && socialMediaModifiers.marginRight}
  `}
`;

export const Image = styled.img`
  width: 20px;
  height: 20px;
`;

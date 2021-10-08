import styled, { css } from 'styled-components';
import { UserInfoProps } from './UserInfo';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const User = styled.div<Pick<UserInfoProps, 'userImage'>>`
  ${({ theme, userImage }) => css`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4.5rem;
    height: 4.5rem;
    border-radius: 50%;
    background-image: url(${userImage});
    background-size: cover;

    &::before {
      content: '';
      position: absolute;
      width: calc(100% + 0.5rem);
      height: calc(100% + 0.5rem);
      border-radius: 50%;
      border: 0.2rem solid ${theme.colors.primary};
    }
  `}
`;
export const Name = styled.p`
  ${({ theme }) => css`
    text-transform: capitalize;
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.thin};
    color: ${theme.colors.textName};
    margin-top: 1rem;
  `}
`;

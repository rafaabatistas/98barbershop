import styled, { css } from 'styled-components';
import media from 'styled-media-query';
import { ModalFormProps } from './ModalForm';

type ModalFormStylesProps = Pick<ModalFormProps, 'isOpen'>;

export const Background = styled.div<ModalFormStylesProps>`
  ${({ theme, isOpen }) => css`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    opacity: ${isOpen ? 0.9 : 0};
    visibility: ${isOpen ? 'visible' : 'hidden'};
    pointer-events: ${isOpen ? 'all' : 'none'};
    background-color: rgba(0, 0, 0, 0.5);
    transition: all 0.35s ease-in-out;
    z-index: ${theme.layers.overlay};
  `}
`;

export const Modal = styled.div<ModalFormStylesProps>`
  ${({ theme, isOpen }) => css`
    position: fixed;
    top: 50%;
    left: 50%;
    width: 90%;
    max-width: 60rem;
    max-height: 59rem;
    background-color: ${theme.colors.gray};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 2rem;
    opacity: ${isOpen ? 1 : 0};
    visibility: ${isOpen ? 'visible' : 'hidden'};
    pointer-events: ${isOpen ? 'all' : 'none'};
    transition: all 0.35s ease-in-out;
    transform: translate(-50%, -50%);
    z-index: ${theme.layers.modal};
    padding: 5rem;
  `}
`;

export const Icon = styled.img`
  ${({ theme }) => css`
    width: 8rem;
    height: 8rem;
    margin-bottom: ${theme.spacings.small};

    ${media.greaterThan('medium')`
      width: 11rem;
      height: 11rem;
    `}
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    font-family: ${theme.font.family.tertiary};
    font-weight: ${theme.font.regular};
    font-size: ${theme.font.sizes.xmedium};
    color: ${theme.colors.white};
    text-align: center;

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge};
    `}
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    font-family: ${theme.font.family.tertiary};
    font-weight: ${theme.font.regular};
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.textName};
    margin-bottom: ${theme.spacings.small};
    text-align: center;

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxmedium};
      margin-bottom: ${theme.spacings.xlarge};
    `}
  `}
`;

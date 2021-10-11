import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    min-width: 31rem;
    width: 31rem;
    position: relative;
    background: ${theme.colors.white};
    padding: 2rem;
    border-radius: 1rem;

    ${media.greaterThan('medium')`
      width: 41rem;
      gap: 3rem
    `}
  `}
`;

export const Bookmark = styled.svg`
  ${({ theme }) => css`
    position: absolute;
    top: 0;
    left: 2rem;
    color: ${theme.colors.primary};
    height: 5.3rem;
  `}
`;

export const Answered = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.textGray};
    text-transform: capitalize;
    font-size: ${theme.font.sizes.xsmall};
    font-family: ${theme.font.family.textReview};
    text-align: right;

    span {
      color: ${theme.colors.primary};
    }
  `}
`;

export const Comment = styled.h5`
  ${({ theme }) => css`
    color: ${theme.colors.textGray};
    font-size: ${theme.font.sizes.xxmedium};
    font-family: ${theme.font.family.textReview};
    text-align: center;
    margin-bottom: 1.5rem;

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xbig};
      margin-bottom: 0;
    `}
  `}
`;

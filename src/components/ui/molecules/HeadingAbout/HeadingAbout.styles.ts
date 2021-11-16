import styled, { css } from 'styled-components';
import { customMedia, extraMedia } from '~src/utils/media/customMedia';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  width: 270px;
  ${extraMedia.greaterThan('small')`
    width: auto;
  `}
`;

export const TitleAbout = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-family: ${theme.font.family.primary};
    font-weight: ${theme.font.regular};
    text-align: center;

    font-size: ${theme.font.sizes.xbig};
    margin-bottom: 0.5rem;

    ${customMedia.greaterThan('big')`
      text-align: left;    
    `}

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xlarge};
      margin-bottom: ${theme.spacings.xsmall};
    `}
  `}
`;

export const IconHeading = styled.img`
  display: none;
  ${customMedia.greaterThan('big')`
    display: block;
    margin-bottom: 4rem;
  `}
`;

export const LineTitle = styled.div`
  display: none;
  ${customMedia.greaterThan('big')`
    display: block;
    width: 0.4rem;
    height: calc(100% - 2rem);
    border-radius: 0.4rem;
    background: rgba(255, 255, 255, 0.3);
    margin-right: 2rem;
    margin-bottom: 4rem;
  `}
`;

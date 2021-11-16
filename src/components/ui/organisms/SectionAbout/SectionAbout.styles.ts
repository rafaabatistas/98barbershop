import styled, { css } from 'styled-components';
import media from 'styled-media-query';
import { customMedia, extraMedia } from '~src/utils/media/customMedia';
import { Container } from '~atoms/Container/Container';
import { HeadingAbout } from '~molecules/HeadingAbout/HeadingAbout';

export const Wrapper = styled.section`
  height: 60rem;

  ${media.greaterThan('medium')`
    height: 80rem;
  `}

  ${customMedia.greaterThan('big')`
    height: 60rem;
  `}
`;

export const AboutContainer = styled(Container)`
  height: 100%;
  display: flex;
  flex-direction: column;

  ${customMedia.greaterThan('big')`
    flex-direction: row;
  `}
`;

export const ContentImage = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  ${media.greaterThan('medium')`
      padding: 0 1.5rem;
  `}
`;

export const Content = styled(ContentImage)`
  flex: 3;
  align-items: flex-start;

  ${extraMedia.lessThan('big')`
      flex: 1;
      align-items: center;
  `}
`;

export const Image = styled.img`
  width: 27.9rem;
  height: 21.6rem;

  ${media.greaterThan('medium')`
    width: 46.1rem;
    height: 36.2rem;
  `}

  ${media.lessThan('large')`
    margin-bottom: 3.5rem;
  `}
`;

export const Heading = styled(HeadingAbout)`
  text-align: center;

  ${customMedia.greaterThan('big')`
    text-align: left;
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    max-width: 51.8rem;
    font-family: ${theme.font.family.tertiary};
    font-weight: ${theme.font.light};
    font-size: ${theme.font.sizes.xsmall};
    line-height: ${theme.spacings.xsmall};
    color: ${theme.colors.white};
    text-align: center;

    ${extraMedia.greaterThan('big')`
      text-align: left;
    `}

    ${customMedia.greaterThan('big')`
      margin-bottom: ${theme.spacings.large};
      margin-left: 5.8rem;    
    `}

    ${media.greaterThan('small')`
      font-size: ${theme.font.sizes.medium};
      line-height: ${theme.spacings.small};
    `}
  `}
`;

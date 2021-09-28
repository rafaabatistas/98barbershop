import styled, { css } from 'styled-components';
import media from 'styled-media-query';
import { SubtitleProps } from './Subtitle';

export const WrapperSubtitle = styled.div<Pick<SubtitleProps, 'size' | 'lineBottom'>>`
  ${({ theme, size, lineBottom }) => css`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: ${theme.spacings.medium};

    ${media.greaterThan('medium')`
      margin-bottom: ${
        lineBottom ? theme.spacings.huge : size === 'normal' ? theme.spacings.large : theme.spacings.xlarge
      };
    `}
  `}
`;

export const Subtitle = styled.h2<Pick<SubtitleProps, 'size'>>`
  ${({ theme, size }) => css`
    width: fit-content;
    display: flex;
    flex-direction: column;
    color: ${theme.colors.white};
    font-family: ${theme.font.family.secundary};
    font-weight: ${theme.font.light};
    font-size: ${theme.font.sizes.xxbig};
    text-align: center;

    ${media.greaterThan('medium')`
      font-size: ${size === 'normal' ? theme.font.sizes.xxlarge : theme.font.sizes.extra};
    `}
  `}
`;

export const LineTitle = styled.div`
  width: calc(100% + 2rem);
  height: 0.2rem;
  background: rgba(255, 255, 255, 0.3);
  margin-top: 0.5rem;
  margin-left: calc(-2rem / 2);
`;

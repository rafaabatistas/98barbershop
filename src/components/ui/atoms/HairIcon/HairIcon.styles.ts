import styled, { css } from 'styled-components';
import { tint } from 'polished';
import media from 'styled-media-query';

import { HairIconProps } from './HairIcon';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Hair = styled.svg<HairIconProps>`
  ${({ theme, type }) => css`
    width: 7rem;

    path:first-child {
      color: ${type === 'full'
        ? tint(0.4, theme.colors.primary)
        : type === 'hair'
        ? tint(0.4, theme.colors.primary)
        : theme.colors.white};
    }

    path:last-child {
      color: ${type === 'full'
        ? tint(0.4, theme.colors.primary)
        : type === 'baber'
        ? tint(0.4, theme.colors.primary)
        : theme.colors.white};
    }

    ${media.greaterThan('medium')`
      width: 9.2rem;
    `}
  `}
`;

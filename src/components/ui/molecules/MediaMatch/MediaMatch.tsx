import styled, { css } from 'styled-components';
import media, { DefaultBreakpoints } from 'styled-media-query';
import { customMedia } from '~src/utils/media/customMedia';

type breakpoint = keyof DefaultBreakpoints;

export type MediaMatchProps = {
  lessThan?: breakpoint;
  greaterThan?: breakpoint;
};

export const mediaMatchModifiers = {
  lessThan: (size: breakpoint) => css`
    ${media.lessThan(size)`
      display: block;
    `}
  `,

  greaterThan: (size: breakpoint) => css`
    ${customMedia.greaterThan(size)`
      display: block;
    `}
  `
};

export default styled.div<MediaMatchProps>`
  ${({ lessThan, greaterThan }) => css`
    display: none;

    ${!!lessThan && mediaMatchModifiers.lessThan(lessThan)}
    ${!!greaterThan && mediaMatchModifiers.greaterThan(greaterThan)}
  `}
`;

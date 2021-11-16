import styled, { css } from 'styled-components';
import { customMedia, extraMedia } from '~src/utils/media/customMedia';

interface breakpointPlus {
  huge: string;
  large: string;
  big: string;
  medium: string;
  small: string;
}

type breakpoint = keyof breakpointPlus;

export type MediaMatchProps = {
  lessThan?: breakpoint;
  greaterThan?: breakpoint;
};

export const mediaMatchModifiers = {
  lessThan: (size: breakpoint) => css`
    ${extraMedia.lessThan(size)`
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

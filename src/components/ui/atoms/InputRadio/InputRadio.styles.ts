import styled, { css } from 'styled-components';
import { InputRadioProps } from './InputRadio';

export const Wrapper = styled.div`
  position: relative;
`;

export const Star = styled.label<Pick<InputRadioProps, 'color'>>`
  ${({ theme, color }) => css`
    width: 2.5rem;
    height: 2.5rem;
    color: ${theme.colors[color!]};

    svg {
      width: 2.5rem;
      pointer-events: none;
      filter: ${color === 'primary' ? `drop-shadow(0 0 0.5rem ${theme.colors[color!]})` : 'none'};
    }
  `};
`;

export const InputRadio = styled.input`
  width: 2.5rem;
  height: 2.5rem;
  left: 0;
  top: 0;
  opacity: 0;
  cursor: pointer;
  position: absolute;
`;

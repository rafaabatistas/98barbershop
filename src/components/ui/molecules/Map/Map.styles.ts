import styled, { css } from 'styled-components';
import { MapContainer } from 'react-leaflet';

export const Container = styled.div`
  position: relative;
  margin: 1.5rem 0;
`;

export const Wrapper = styled(MapContainer)`
  width: 100%;
  height: 43.4rem;
  position: relative;
`;

export const ArrowMoldingUp = styled.svg`
  ${({ theme }) => css`
    position: absolute;
    width: 5rem;
    z-index: 400;
    color: ${theme.colors.darkGray};
    top: -0.1rem;
    left: 50%;
    transform: translate(-50%, 0);
  `}
`;

export const ArrowMoldingDown = styled.svg`
  ${({ theme }) => css`
    position: absolute;
    width: 5rem;
    z-index: 400;
    color: ${theme.colors.darkGray};
    bottom: -0.1rem;
    left: 50%;
    transform: translate(-50%, 0);
  `}
`;

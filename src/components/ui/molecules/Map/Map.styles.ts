import styled, { css } from 'styled-components';
import { MapContainer } from 'react-leaflet';

export const Container = styled.div`
  ${({ theme }) => css`
    position: relative;
    z-index: 2;

    .leaflet-container {
      background-color: ${theme.colors.darkGray};
    }
  `}
`;

export const Wrapper = styled(MapContainer)`
  width: 100%;
  height: 43.4rem;
  position: relative;

  .leaflet-bottom.leaflet-right {
    opacity: 0;
    pointer-events: none;
  }
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
    color: ${theme.colors.gray};
    bottom: -0.1rem;
    left: 50%;
    transform: translate(-50%, 0);
  `}
`;

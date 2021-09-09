import styled from 'styled-components';
import media from 'styled-media-query';

export const NavList = styled.ul`
  position: relative;
  width: 100%;
  height: 100%;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow-x: hidden;

  ${media.greaterThan('small')`
    justify-content: center;
  `}
`;

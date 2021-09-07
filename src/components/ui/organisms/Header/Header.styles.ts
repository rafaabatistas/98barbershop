import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  height: 100px;
  z-index: 2;
  position: fixed;
  display: flex;
  align-items: center;
  background-color: transparent;
  justify-content: center;
  backdrop-filter: blur(10px);
  border-bottom: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 0 0 20px 20px;
`;

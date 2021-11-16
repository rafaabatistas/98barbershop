import styled, { css } from 'styled-components';

type ImageProps = {
  src: string;
};

export const Banner = styled.div<ImageProps>`
  ${({ src }) => css`
    width: 100%;
    height: 100vh;
    background-image: url(${src});
    background-position: center;
    background-size: cover;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `}
`;

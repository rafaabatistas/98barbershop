import styled, { css } from 'styled-components';
import media from 'styled-media-query';
import { Container } from '~atoms/Container/Container';

type BoxClerkProps = {
  src: string;
};

const checkValidPath = (src: string) => {
  if (src === undefined) {
    return css`
      background-image: url('/assets/img/foto_indisponivel.jpg');
    `;
  }

  return css`
    background-image: ${`url(/assets/img/${src})`};
  `;
};

export const Wrapper = styled.form`
  height: 110rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  ${media.greaterThan('medium')`
    height: 130rem;
  `};

  ${media.greaterThan('large')`
    height: 98rem;
  `};
`;

export const BoxContact = styled(Container)`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const BoxInputs = styled.div`
  flex: 1;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  ${media.greaterThan('large')`
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
  `}
`;

export const BoxClerk = styled.div<BoxClerkProps>`
  ${({ theme, src }) => css`
    width: 20rem;
    height: 20rem;
    border-radius: 50%;
    background-position: center;
    background-size: cover;
    margin-top: 3rem;
    border: 2px solid ${theme.colors.gray};

    ${checkValidPath(src)}
  `}
`;

export const BoxAttendance = styled.div`
  order: 1;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  ${media.greaterThan('large')`
    order: 2;
    width: auto;
    min-width: 52rem;
  `}
`;

export const BoxButton = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Loading = styled.svg`
  width: 5rem;
  height: 6rem;
  pointer-events: none;
  position: absolute;
  transform: translate(-50%, -50%);
`;

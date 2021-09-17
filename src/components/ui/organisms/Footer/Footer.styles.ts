import styled, { css } from 'styled-components';
import media from 'styled-media-query';

const diplayFlex = css`
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Footer = styled.footer`
  ${({ theme }) => css`
    width: 100%;
    height: 420px;
    display: flex;
    justify-content: center;
    background-color: ${theme.colors.darkGray};
    color: white;
    position: absolute;

    ${media.greaterThan('medium')`
      height: 180px;
    `}
  `}
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1290px;
  margin: 0 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  ${media.greaterThan('medium')`
    flex-direction: row;
  `}
`;

export const BoxInfoSocialMedia = styled.div`
  ${diplayFlex};
  order: 1;
`;

export const BoxInfoLocation = styled.div`
  ${diplayFlex};
  order: 3;

  ${media.greaterThan('medium')`
    order: 2;
  `}
`;

export const BoxInfoInstitutional = styled.div`
  ${diplayFlex};
  order: 2;

  ${media.greaterThan('medium')`
    order: 3;
  `}
`;

export const BoxSocialMedia = styled.div`
  display: flex;
  justify-content: center;
`;

export const Heading = styled.h3`
  ${({ theme }) => css`
    font-family: ${theme.font.family.tertiary};
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.xmedium};
    margin-bottom: 3rem;
  `}
`;

import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import { Container } from '~atoms/Container/Container';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    margin: calc(${theme.spacings.section} / 2) 0;

    .slick-track,
    .slick-list {
      display: flex;
    }

    .slick-slide > div {
      margin: 0 ${theme.spacings.xxsmall};
      flex: 1 0 auto;
      height: 100%;
    }

    ${media.greaterThan('medium')`
      margin: ${theme.spacings.section} 0;
    `}
  `}
`;

export const WrapperServicesBox = styled(Container)`
  display: flex;
  gap: 3rem;
`;

import * as S from './Header.styles';

import { NavList } from '~molecules/NavList/NavList';
// import { Container } from '~atoms/Container/Container';

export const Header = () => {
  return (
    <S.Header>
      <NavList />
    </S.Header>
  );
};

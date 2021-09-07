import * as S from './NavList.styles';

import Fade from 'react-reveal/Fade';

import { Logotipo } from '~atoms/Logotipo/Logotipo';
import { NavItem } from '~atoms/NavItem/NavItem';

export const NavList = () => {
  return (
    <S.NavList>
      <Fade left>
        <Logotipo hideOnMobile />
      </Fade>
      <Fade right>
        <NavItem>O melhor estar por vir!</NavItem>
      </Fade>
    </S.NavList>
  );
};

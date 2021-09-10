import { useState } from 'react';

import Fade from 'react-reveal/Fade';
import { Sling as Hamburger } from 'hamburger-react';

import MediaMatch from '~molecules/MediaMatch/MediaMatch';
import { Logotipo } from '~atoms/Logotipo/Logotipo';

import * as S from './NavList.styles';
import { MenuMobile } from '~molecules/MenuMobile/MenuMobile';
import { NavLinks } from '~molecules/NavLinks/NavLinks';

export const NavList = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.NavList>
      <NavLinks>
        <Fade left>
          <Logotipo hideOnMobile />
        </Fade>
      </NavLinks>

      <MediaMatch lessThan="medium">
        <Fade right>
          <Hamburger
            color="#FFF"
            duration={0.4}
            size={30}
            distance="md"
            rounded
            direction="right"
            easing="ease-out"
            toggled={isOpen}
            toggle={setIsOpen}
            label="Abrir e Fechar"
          />

          <MenuMobile isOpen={isOpen} />
        </Fade>
      </MediaMatch>
    </S.NavList>
  );
};

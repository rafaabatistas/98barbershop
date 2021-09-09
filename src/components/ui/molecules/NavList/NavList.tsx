import { useState } from 'react';

import Fade from 'react-reveal/Fade';
import { Sling as Hamburger } from 'hamburger-react';

import MediaMatch from '../MediaMatch/MediaMatch';
import { Logotipo } from '~atoms/Logotipo/Logotipo';

import * as S from './NavList.styles';
import { MenuMobile } from '../MenuMobile/MenuMobile';

export const NavList = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.NavList>
      <Fade left>
        <Logotipo hideOnMobile />
      </Fade>

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

import { useState } from 'react';

import Fade from 'react-reveal/Fade';
import { Sling as Hamburger } from 'hamburger-react';

import MediaMatch from '~molecules/MediaMatch/MediaMatch';
import { Logotipo } from '~atoms/Logotipo/Logotipo';
import { useMediaQuery } from 'react-responsive';

import * as S from './NavList.styles';
import { MenuMobile } from '~molecules/MenuMobile/MenuMobile';
import { NavLinks } from '~molecules/NavLinks/NavLinks';

export const NavList = () => {
  const [isOpen, setIsOpen] = useState(false);

  const isPortrait = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <S.NavList>
      <NavLinks paddingXLine={10} names={['Home', 'Sobre', 'Serviços', 'Equipe', 'Opinião', 'FeedBack']}>
        <Fade left={isPortrait} top={!isPortrait}>
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

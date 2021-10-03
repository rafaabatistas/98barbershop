import * as S from './NavList.styles';

import { useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Sling as Hamburger } from 'hamburger-react';
import { useMediaQuery } from 'react-responsive';

import MediaMatch from '~molecules/MediaMatch/MediaMatch';
import { Logotipo } from '~atoms/Logotipo/Logotipo';
import { MenuMobile } from '~molecules/MenuMobile/MenuMobile';
import { NavLinks } from '~molecules/NavLinks/NavLinks';

export const NavList = () => {
  const [isOpen, setIsOpen] = useState(false);

  const isPortrait = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <S.NavList>
      <NavLinks
        paddingXLine={10}
        names={[
          { nav: 'Home', link: 'home' },
          { nav: 'Sobre', link: 'sobre' },
          { nav: 'Serviços', link: 'servicos' },
          { nav: 'Equipe', link: 'equipe' },
          { nav: 'Opinião', link: 'opiniao' },
          { nav: 'FeedBack', link: 'feedBack' }
        ]}
      >
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

          <MenuMobile isOpen={isOpen} setIsOpen={setIsOpen} />
        </Fade>
      </MediaMatch>
    </S.NavList>
  );
};

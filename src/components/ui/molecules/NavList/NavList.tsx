import * as S from './NavList.styles';

import { useState } from 'react';
import { Sling as Hamburger } from 'hamburger-react';

import MediaMatch from '~molecules/MediaMatch/MediaMatch';
import { Logotipo } from '~atoms/Logotipo/Logotipo';
import { MenuMobile } from '~molecules/MenuMobile/MenuMobile';
import { NavLinks } from '~molecules/NavLinks/NavLinks';

export const NavList = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.NavList>
      <NavLinks
        paddingXLine={10}
        names={[
          { nav: 'Home', link: 'home' },
          { nav: 'Sobre', link: 'sobre' },
          { nav: 'Serviços', link: 'servicos' },
          { nav: 'Equipe', link: 'equipe' },
          { nav: 'Avaliações', link: 'avaliacao' },
          { nav: 'FeedBack', link: 'feedback' }
        ]}
      >
        <Logotipo hideOnMobile />
      </NavLinks>

      <MediaMatch lessThan="medium">
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
      </MediaMatch>
    </S.NavList>
  );
};

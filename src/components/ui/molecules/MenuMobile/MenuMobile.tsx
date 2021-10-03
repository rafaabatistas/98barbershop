import * as S from './MenuMobile.styles';

import { useState } from 'react';

export type MenuMobileProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export const MenuMobile = ({ isOpen, setIsOpen }: MenuMobileProps) => {
  const [isActive, setIsActive] = useState('home');

  return (
    <S.Wrapper aria-hidden={!isOpen} aria-label="Menu Full" isOpen={isOpen}>
      <S.WrapperList>
        <S.List isActive={isActive === 'home'}>
          <S.MenuLink to="home" aria-label="Home" onSetActive={setIsActive} onClick={() => setIsOpen(!isOpen)}>
            Home
          </S.MenuLink>
        </S.List>
        <S.List isActive={isActive === 'sobre'}>
          <S.MenuLink to="sobre" aria-label="Sobre" onSetActive={setIsActive} onClick={() => setIsOpen(!isOpen)}>
            Sobre
          </S.MenuLink>
        </S.List>
        <S.List isActive={isActive === 'servicos'}>
          <S.MenuLink to="servicos" aria-label="Serviços" onSetActive={setIsActive} onClick={() => setIsOpen(!isOpen)}>
            Serviços
          </S.MenuLink>
        </S.List>
        <S.List isActive={isActive === 'equipe'}>
          <S.MenuLink to="equipe" aria-label="Equipe" onSetActive={setIsActive} onClick={() => setIsOpen(!isOpen)}>
            Equipe
          </S.MenuLink>
        </S.List>
        <S.List isActive={isActive === 'opiniao'}>
          <S.MenuLink to="opiniao" aria-label="Opinião" onSetActive={setIsActive} onClick={() => setIsOpen(!isOpen)}>
            Opinião
          </S.MenuLink>
        </S.List>
        <S.List isActive={isActive === 'feedback'}>
          <S.MenuLink to="feedback" aria-label="FeedBack" onSetActive={setIsActive} onClick={() => setIsOpen(!isOpen)}>
            FeedBack
          </S.MenuLink>
        </S.List>
      </S.WrapperList>
    </S.Wrapper>
  );
};

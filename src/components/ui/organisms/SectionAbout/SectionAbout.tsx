import * as S from './SectionAbout.styles';

import { useMediaQuery } from 'react-responsive';

import { HeadingAbout } from '~molecules/HeadingAbout/HeadingAbout';
import { ButtonScroll } from '~atoms/ButtonScroll/ButtonScroll';
import MediaMatch from '~molecules/MediaMatch/MediaMatch';

export const SectionAbout = () => {
  const isPortrait = useMediaQuery({ query: '(max-width: 1024px)' });

  return (
    <S.Wrapper>
      <S.AboutContainer>
        <S.Content>
          <HeadingAbout
            icon="/assets/svg/iconAbout.svg"
            title="Olá Pessoal"
            subtitle="Nós Somos a 98BarberShop"
            lineBottom={isPortrait}
            lineLeft
          />
          <S.Description>
            A 98 BarberShop é um espaço de serviços masculinos que combina valores tradicionais com estilo moderno. Uma
            barbearia contemporânea com uma atmosfera informal e alegre. Um espaço para homens com estilo moderno,
            energia jovem e com pensamento inovador.
          </S.Description>
          <MediaMatch greaterThan="big">
            <ButtonScroll to="servicos" marginLeft="big">
              Saiba Mais
            </ButtonScroll>
          </MediaMatch>
        </S.Content>
        <S.ContentImage>
          <S.Image
            src="/assets/img/image-about.png"
            alt="Foto ilustrativa do interior de uma barbearia"
            loading="lazy"
          />
          <MediaMatch lessThan="big">
            <ButtonScroll to="servicos">Saiba Mais</ButtonScroll>
          </MediaMatch>
        </S.ContentImage>
      </S.AboutContainer>
    </S.Wrapper>
  );
};

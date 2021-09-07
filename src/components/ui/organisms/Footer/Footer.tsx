import * as S from './Footer.styles';

import Fade from 'react-reveal/Fade';

import { SocialMedia } from '~atoms/SocialMedia/SocialMedia';
import { Description } from '~atoms/Description/Description';

export const Footer = () => (
  <S.Footer>
    <S.Container>
      <S.BoxInfoSocialMedia>
        <Fade>
          <S.Heading>Siga-nos</S.Heading>
          <S.BoxSocialMedia>
            <SocialMedia
              marginRight
              link="https://www.instagram.com/98barbershop/"
              image="/assets/svg/instagram-icon.svg"
              alt="Link que leva para a página no instagram"
            />
            <SocialMedia
              link="tel:+5511986548715"
              image="/assets/svg/whatsapp-icon.svg"
              alt="Link que mostra número do Whatsapp"
            />
          </S.BoxSocialMedia>
        </Fade>
      </S.BoxInfoSocialMedia>
      <S.BoxInfoLocation>
        <Fade>
          <Description size="medium" marginBottom>
            Rua Caminho Encanto 334 - Guarulhos - SP
          </Description>
          <Description size="medium" marginBottom>
            Copyright ©2021 <span>98Barbershop</span>. Todos os direitos reservados
          </Description>
        </Fade>
      </S.BoxInfoLocation>
      <S.BoxInfoInstitutional>
        <Fade>
          <S.Heading>Institucional</S.Heading>
          <Description size="xmedium">Termos de Uso</Description>
        </Fade>
      </S.BoxInfoInstitutional>
    </S.Container>
  </S.Footer>
);

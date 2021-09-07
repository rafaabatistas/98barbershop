import * as S from './Banner.styles';

import Fade from 'react-reveal/Fade';

import { Title } from '~atoms/Title/Title';
import { Subtitle } from '~atoms/Subtitle/Subtitle';

export type BannerProps = {
  image: string;
};

export const Banner = ({ image }: BannerProps) => {
  return (
    <S.Banner src={image}>
      <Fade delay={300} bottom>
        <Title size="large">Seja o Primeiro a Saber</Title>
      </Fade>
      <Fade delay={400} bottom>
        <Subtitle size="large">Em breve sua Barbearia favorita terá uma nova plataforma inaugurada!</Subtitle>
      </Fade>
    </S.Banner>
  );
};

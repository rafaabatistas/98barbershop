import Fade from 'react-reveal/Fade';

import MediaMatch from '~molecules/MediaMatch/MediaMatch';

import { Background } from '~atoms/Background/Background';
import { Heading } from '~molecules/Heading/Heading';
import { ServiceBox, ServiceBoxProps } from '~molecules/ServiceBox/ServiceBox';
import { Slider, SliderSettings } from '~molecules/Slider/Slider';

import * as S from './MainServices.styles';

export type MainServicesProps = {
  items: ServiceBoxProps[];
};

const settings: SliderSettings = {
  slidesToShow: 2,
  arrows: false,
  infinite: false,
  speed: 500,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1.05,
        arrows: false,
        infinite: false,
        speed: 500
      }
    }
  ]
};

export const MainServices = ({ items }: MainServicesProps) => (
  <S.Wrapper>
    <Background src="/assets/img/slide-4.jpg">
      <Heading title="Pronto para Cortar" subtitle="Principais Serviços" lineBottom />

      <MediaMatch greaterThan="large">
        <S.WrapperServicesBox>
          {items.map(({ infos, type }, index) => (
            <Fade
              key={`Service the ${type} - ${index}`}
              delay={400}
              left={index === 0}
              bottom={index === 1}
              right={index === 2}
            >
              <ServiceBox infos={infos} type={type} />
            </Fade>
          ))}
        </S.WrapperServicesBox>
      </MediaMatch>

      <MediaMatch lessThan="large">
        <Slider settings={settings}>
          {items.map(({ infos, type }, index) => (
            <ServiceBox key={`Service in the slider ${type} - ${index}`} infos={infos} type={type} />
          ))}
        </Slider>
      </MediaMatch>
    </Background>
  </S.Wrapper>
);

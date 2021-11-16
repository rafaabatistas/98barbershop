import { Slider, SliderSettings } from '~molecules/Slider/Slider';
import { Banner, BannerProps } from '~organisms/Banner/Banner';

import * as S from './BannerSlider.styles';

export type BannerSliderProps = {
  items: BannerProps[];
};

const settings: SliderSettings = {
  dots: true,
  arrows: false,
  vertical: true,
  verticalSwiping: true,
  infinite: true,
  speed: 1000,
  autoplay: true,
  autoplaySpeed: 6000,
  responsive: [
    {
      breakpoint: 1170,
      settings: {
        vertical: false,
        verticalSwiping: false
      }
    }
  ]
};

export const BannerSlider = ({ items }: BannerSliderProps) => (
  <S.Wrapper>
    <Slider settings={settings}>
      {items.map((item) => (
        <Banner key={item.title} {...item}></Banner>
      ))}
    </Slider>
  </S.Wrapper>
);

import { Background } from '~atoms/Background/Background';
import { Heading } from '~molecules/Heading/Heading';
import { Slider, SliderSettings } from '~molecules/Slider/Slider';
import { ReviewBox, ReviewBoxProps } from '~molecules/ReviewBox/ReviewBox';

import * as S from './Review.styles';

export type ReviewProps = {
  items: ReviewBoxProps[];
};

const settings: SliderSettings = {
  slidesToShow: 3,
  arrows: false,
  dots: true,
  infinite: true,
  speed: 1000,
  centerMode: true,
  cssEase: 'ease-out',
  centerPadding: '0',
  responsive: [
    {
      breakpoint: 940,
      settings: {
        slidesToShow: 2,
        arrows: false,
        dots: true,
        infinite: true,
        speed: 1000,
        centerMode: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        arrows: false,
        dots: true,
        infinite: true,
        speed: 1000,
        centerMode: true,
        centerPadding: '50px'
      }
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1,
        arrows: false,
        dots: true,
        infinite: true,
        speed: 1000,
        centerMode: true,
        centerPadding: '25px'
      }
    },
    {
      breakpoint: 340,
      settings: {
        slidesToShow: 1,
        arrows: false,
        dots: true,
        infinite: true,
        speed: 1000,
        centerMode: false,
        centerPadding: '0'
      }
    }
  ]
};

export const Review = ({ items }: ReviewProps) => (
  <S.Wrapper>
    <Background src="/assets/img/slide-4.jpg">
      <Heading title="O Que Dizem de Nós" subtitle="Nossas Avaliações" lineBottom />

      <S.WrapperSlider>
        <Slider settings={settings}>
          {items.map((item, index) => (
            <ReviewBox key={`${item.userName} - ${item.answered} - ${index}`} {...item} />
          ))}
        </Slider>
      </S.WrapperSlider>
    </Background>
  </S.Wrapper>
);
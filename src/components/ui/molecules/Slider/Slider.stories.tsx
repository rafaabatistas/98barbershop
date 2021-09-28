import { Story, Meta } from '@storybook/react/types-6-0';
import { Settings } from 'react-slick';
import styled from 'styled-components';
import { Slider } from './Slider';

export default {
  title: 'molecules/Slider',
  component: Slider
} as Meta;

const horizontalBannerSettings: Settings = {
  slidesToScroll: 1,
  infinite: true,
  dots: true,
  speed: 2000,
  autoplay: true,
  autoplaySpeed: 4000
};

const verticalBannerSettings: Settings = {
  slidesToShow: 1,
  vertical: true,
  verticalSwiping: true,
  infinite: true,
  dots: true,
  speed: 2000,
  autoplay: true,
  autoplaySpeed: 3000
};

const Slide = styled.div`
  background: gray;
  width: 30rem;
  padding: 10rem 0;
  border: 0.1rem solid red;
  color: white;
  text-align: center;
`;

export const Horizontal: Story = () => (
  <Slider settings={horizontalBannerSettings}>
    <Slide>1</Slide>
    <Slide>2</Slide>
    <Slide>3</Slide>
    <Slide>4</Slide>
    <Slide>5</Slide>
    <Slide>6</Slide>
  </Slider>
);

export const Vertical: Story = () => (
  <Slider settings={verticalBannerSettings}>
    <Slide>1</Slide>
    <Slide>2</Slide>
    <Slide>3</Slide>
    <Slide>4</Slide>
    <Slide>5</Slide>
    <Slide>6</Slide>
  </Slider>
);

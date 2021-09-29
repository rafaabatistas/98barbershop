import { Story, Meta } from '@storybook/react';

import { BannerSlider, BannerSliderProps } from './BannerSlider';
import items from './mock';

export default {
  title: 'organisms/BannerSlider',
  args: {
    items: items
  },
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#121212' }]
    },
    layout: 'fullscreen'
  },
  component: BannerSlider
} as Meta;

export const Basic: Story<BannerSliderProps> = (args) => <BannerSlider {...args} />;

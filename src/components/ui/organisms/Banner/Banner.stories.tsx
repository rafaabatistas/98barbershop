import { Story, Meta } from '@storybook/react';

import { Banner, BannerProps } from './Banner';

export default {
  title: 'organisms/Banner',
  component: Banner,
  args: {
    image: '/assets/img/image-banner-1.jpg'
  },
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#121212' }]
    },
    layout: 'fullscreen'
  }
} as Meta;

export const Basic: Story<BannerProps> = (args) => <Banner {...args} />;

import { Story, Meta } from '@storybook/react';

import { Banner, BannerProps } from './Banner';

export default {
  title: 'organisms/Banner',
  component: Banner,
  args: {
    img: '/assets/img/slide-1.jpg',
    title: 'Bem Vindo a BarberShop',
    subtitle: 'We Are BarberShop!',
    description: 'Enjoy the Ultimate Relaxed Grooming Experience For Men every time you step into the Boardroom',
    buttons: 2,
    buttonLabelOne: 'Marcar Hora',
    buttonLabelTwo: 'Saiba Mais'
  },
  argsTypes: {
    img: {
      type: ''
    }
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

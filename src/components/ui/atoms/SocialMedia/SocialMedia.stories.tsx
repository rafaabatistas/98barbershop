import { Story, Meta } from '@storybook/react';

import { SocialMedia, SocialMediaProps } from './SocialMedia';

export default {
  title: 'atoms/SocialMedia',
  component: SocialMedia
} as Meta;

export const Instagram: Story<SocialMediaProps> = (args) => <SocialMedia {...args} />;
export const Whatsapp: Story<SocialMediaProps> = (args) => <SocialMedia {...args} />;

Instagram.args = {
  link: 'https://www.instagram.com/98barbershop/',
  image: '/assets/svg/instagram-icon.svg',
  alt: 'Link que leva para a página no instagram'
};

Whatsapp.args = {
  link: 'tel:+5511986548715',
  image: '/assets/svg/whatsapp-icon.svg',
  alt: 'Link que mostra número do Whatsapp'
};

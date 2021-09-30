import { Story, Meta } from '@storybook/react';

import { Heading, HeadingProps } from './Heading';

export default {
  title: 'molecules/Heading',
  component: Heading,
  args: {
    img: '/assets/img/image-banner-1.jpg',
    title: 'Bem Vindo a BarberShop',
    subtitle: 'We Are BarberShop!',
    description: 'Enjoy the Ultimate Relaxed Grooming Experience For Men every time you step into the Boardroom',
    buttons: 2,
    buttonLabelOne: 'Marcar Hora',
    buttonLabelTwo: 'Saiba Mais',
    size: 'large'
  },
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#121212' }]
    },
    layout: 'fullscreen'
  }
} as Meta;

export const Basic: Story<HeadingProps> = (args) => <Heading {...args} />;

Basic.args = {
  buttons: 2
};

export const BasicWithoutButtons: Story<HeadingProps> = (args) => <Heading {...args} />;

BasicWithoutButtons.args = {
  buttons: undefined
};

export const Mobile: Story<HeadingProps> = (args) => <Heading {...args} />;

Mobile.parameters = {
  layout: 'fullscreen',
  viewport: {
    defaultViewport: 'mobile1'
  }
};

export const MobileWithoutButtons: Story<HeadingProps> = (args) => <Heading {...args} />;

MobileWithoutButtons.args = {
  buttons: undefined
};

MobileWithoutButtons.parameters = {
  layout: 'fullscreen',
  viewport: {
    defaultViewport: 'mobile1'
  }
};

export const MobileWithContent: Story<HeadingProps> = (args) => (
  <Heading lineBottom {...args}>
    <h1 style={{ color: '#FFF', textAlign: 'center' }}>Conteúdo</h1>
  </Heading>
);

MobileWithContent.args = {
  title: 'Olá Pessoal',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi lorem consectetur sapien, ridiculus nulla magna bibendum. Euismod mi aliquam eget pretium blandit. Sed sit facilisi pellentesque mi. Sed molestie eu aliquet auctor.',
  size: 'normal'
};

MobileWithContent.parameters = {
  layout: 'fullscreen',
  viewport: {
    defaultViewport: 'mobile1'
  }
};

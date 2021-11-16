import { Story, Meta } from '@storybook/react';

import { Background, BackgroundProps } from './Background';

export default {
  title: 'atoms/Background',
  component: Background,
  args: {
    src: '/assets/img/slide-1.jpg'
  },
  parameters: {
    layout: 'fullscreen'
  }
} as Meta;

export const Basic: Story<BackgroundProps> = (args) => (
  <Background {...args}>
    <h1 style={{ textAlign: 'center', color: '#fff' }}>Background</h1>
  </Background>
);

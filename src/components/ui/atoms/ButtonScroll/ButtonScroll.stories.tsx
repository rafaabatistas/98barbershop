import { Story, Meta } from '@storybook/react';

import { ButtonScroll, ButtonScrollProps } from './ButtonScroll';

export default {
  title: 'atoms/ButtonScroll',
  component: ButtonScroll,
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#121212' }]
    }
  }
} as Meta;

export const Basic: Story<ButtonScrollProps> = (args) => <ButtonScroll {...args} />;

Basic.args = {
  children: 'Marcar Hora',
  to: 'servicos'
};

export const Secondary: Story<ButtonScrollProps> = (args) => <ButtonScroll {...args} />;

Secondary.args = {
  children: 'Saiba Mais',
  buttonStyle: 'secondary',
  to: 'servicos'
};

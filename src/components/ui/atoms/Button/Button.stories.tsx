import { Story, Meta } from '@storybook/react';

import { Button, ButtonProps } from './Button';

export default {
  title: 'atoms/Button',
  component: Button,
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#121212' }]
    }
  }
} as Meta;

export const Basic: Story<ButtonProps> = (args) => <Button {...args} />;

Basic.args = {
  children: 'Marcar Hora'
};

export const Secondary: Story<ButtonProps> = (args) => <Button {...args} />;

Secondary.args = {
  children: 'Saiba Mais',
  buttonStyle: 'secondary'
};

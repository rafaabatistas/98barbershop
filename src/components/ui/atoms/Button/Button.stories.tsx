import { Story, Meta } from '@storybook/react';

import { Button } from './Button';

export default {
  title: 'atoms/Button',
  component: Button,
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#121212' }]
    }
  },
  argTypes: {
    as: {
      type: 'select',
      options: ['a', 'button']
    }
  }
} as Meta;

export const Basic: Story = (args) => <Button {...args} />;

Basic.args = {
  children: 'Marcar Hora'
};

export const Secondary: Story = (args) => <Button {...args} />;

Secondary.args = {
  children: 'Saiba Mais',
  buttonStyle: 'secondary'
};

import { Story, Meta } from '@storybook/react';

import { Logotipo, LogotipoProps } from './Logotipo';

export default {
  title: 'atoms/Logotipo',
  component: Logotipo,
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#121212' }]
    }
  }
} as Meta;

export const Basic: Story<LogotipoProps> = (args) => <Logotipo {...args} />;

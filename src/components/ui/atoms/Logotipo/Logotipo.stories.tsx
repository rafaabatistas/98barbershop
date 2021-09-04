import { Story, Meta } from '@storybook/react';

import { Logotipo, LogotipoProps } from './Logotipo';

export default {
  title: 'Logotipo',
  component: Logotipo
} as Meta;

export const Basic: Story<LogotipoProps> = (args) => <Logotipo {...args} />;

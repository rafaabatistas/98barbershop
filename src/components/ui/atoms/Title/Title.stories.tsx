import { Story, Meta } from '@storybook/react';

import { Title, TitleProps } from './Title';

export default {
  title: 'atoms/Title',
  component: Title,
  argTypes: {
    children: {
      type: 'string'
    }
  },
  args: {
    children: 'Seja o Primeiro a Saber'
  }
} as Meta;

export const Basic: Story<TitleProps> = (args) => <Title {...args} />;

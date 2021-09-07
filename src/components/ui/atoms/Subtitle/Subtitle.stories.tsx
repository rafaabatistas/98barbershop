import { Story, Meta } from '@storybook/react';

import { Subtitle } from './Subtitle';
import { TitleProps } from '~atoms/Title/Title';

export default {
  title: 'atoms/Subtitle',
  component: Subtitle,
  argsTypes: {
    children: {
      type: 'string'
    }
  },
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#121212' }]
    }
  }
} as Meta;

export const Basic: Story<TitleProps> = (args) => <Subtitle {...args} />;

Basic.args = {
  children: 'Em breve sua Barbearia favorita terá sua nova plataforma inaugurada!'
};

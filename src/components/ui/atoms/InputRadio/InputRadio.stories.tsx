import { Story, Meta } from '@storybook/react';

import { InputRadio, InputRadioProps } from './InputRadio';

export default {
  title: 'atoms/InputRadio',
  component: InputRadio
} as Meta;

export const Basic: Story<InputRadioProps> = (args) => <InputRadio {...args} />;

Basic.args = {
  labelFor: 'level',
  value: '1',
  required: true
};

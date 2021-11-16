import { Story, Meta } from '@storybook/react';

import { InputRadioGroup, InputRadioGroupProps } from './InputRadioGroup';

export default {
  title: 'molecules/InputRadioGroup',
  component: InputRadioGroup
} as Meta;

export const Basic: Story<InputRadioGroupProps> = (args) => <InputRadioGroup {...args} />;

Basic.args = {
  labelFor: 'nota'
};

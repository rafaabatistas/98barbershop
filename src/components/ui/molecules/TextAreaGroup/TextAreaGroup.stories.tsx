import { Story, Meta } from '@storybook/react';

import { TextAreaGroup, TextAreaGroupProps } from './TextAreaGroup';

export default {
  title: 'molecules/TextAreaGroup',
  component: TextAreaGroup
} as Meta;

export const Basic: Story<TextAreaGroupProps> = (args) => <TextAreaGroup {...args} />;

Basic.args = {
  label: 'Escreva sua opinião',
  labelFor: 'feedback',
  required: true,
  placeholder: 'Comente sobre sua experiência com nosso serviço',
  maxLength: 225,
  calcMaxLength: 225
};

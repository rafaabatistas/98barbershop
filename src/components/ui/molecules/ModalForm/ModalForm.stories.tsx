import { Story, Meta } from '@storybook/react';

import { ModalForm, ModalFormProps } from './ModalForm';

export default {
  title: 'molecules/ModalForm',
  component: ModalForm
} as Meta;

export const Success: Story<ModalFormProps> = (args) => <ModalForm {...args} />;

Success.args = {
  isOpen: true,
  status: 'success'
};

export const Error: Story<ModalFormProps> = (args) => <ModalForm {...args} />;

Error.args = {
  isOpen: true,
  status: 'error'
};

import { Story, Meta } from '@storybook/react';

import { ReviewBox, ReviewBoxProps } from './ReviewBox';

export default {
  title: 'molecules/ReviewBox',
  component: ReviewBox,
  args: {
    atendidoPor: 'cleber',
    nota: 5,
    feedback:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
    nome: 'gabriel',
    sobrenome: 'guedes'
  }
} as Meta;

export const Basic: Story<ReviewBoxProps> = (args) => <ReviewBox {...args} />;

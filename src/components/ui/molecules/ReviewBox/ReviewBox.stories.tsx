import { Story, Meta } from '@storybook/react';

import { ReviewBox, ReviewBoxProps } from './ReviewBox';

export default {
  title: 'molecules/ReviewBox',
  component: ReviewBox,
  args: {
    answered: 'cleber',
    feedbackNote: 5,
    comment:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
    userImage: '/assets/img/testUser.png',
    userName: 'gabriel guedes'
  }
} as Meta;

export const Basic: Story<ReviewBoxProps> = (args) => <ReviewBox {...args} />;

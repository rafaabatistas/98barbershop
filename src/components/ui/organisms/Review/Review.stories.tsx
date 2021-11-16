import { Story, Meta } from '@storybook/react';

import reviews from './mock';

import { Review, ReviewProps } from './Review';

export default {
  title: 'organisms/Review',
  component: Review,
  args: {
    reviews: reviews
  },
  parameters: {
    layout: 'fullscreen'
  }
} as Meta;

export const Basic: Story<ReviewProps> = (args) => <Review {...args} />;

export const Mobile: Story<ReviewProps> = (args) => <Review {...args} />;

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  }
};

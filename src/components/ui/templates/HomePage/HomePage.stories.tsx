import { Story, Meta } from '@storybook/react';

import HomePage from './HomePage';

export default {
  title: 'templates/HomePage',
  component: HomePage,
  parameters: {
    layout: 'fullscreen'
  }
} as Meta;

export const Basic: Story = () => <HomePage />;

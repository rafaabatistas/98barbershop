import { Story, Meta } from '@storybook/react';

import { Footer } from './Footer';

export default {
  title: 'organisms/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen'
  }
} as Meta;

export const Basic: Story = () => <Footer />;

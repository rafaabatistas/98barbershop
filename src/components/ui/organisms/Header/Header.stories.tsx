import { Story, Meta } from '@storybook/react';

import { Header } from './Header';

export default {
  title: 'molecules/Header',
  component: Header,
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#121212' }]
    }
  }
} as Meta;

export const Basic: Story = () => <Header />;

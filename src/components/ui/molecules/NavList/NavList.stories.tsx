import { Story, Meta } from '@storybook/react';

import { NavList } from './NavList';

export default {
  title: 'molecules/NavList',
  component: NavList,
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#121212' }]
    }
  }
} as Meta;

export const Basic: Story = () => <NavList />;

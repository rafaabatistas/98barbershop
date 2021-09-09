import { Story, Meta } from '@storybook/react';

import { NavList } from './NavList';

export default {
  title: 'molecules/NavList',
  component: NavList,
  layout: 'fullscreen',
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#121212' }]
    }
  }
} as Meta;

export const Basic: Story = () => <NavList />;

export const Mobile: Story = () => <NavList />;

Mobile.parameters = {
  layout: 'fullscreen',
  viewport: {
    defaultViewport: 'mobile1'
  }
};

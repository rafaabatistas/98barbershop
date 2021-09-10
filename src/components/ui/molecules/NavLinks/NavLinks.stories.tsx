import { Story, Meta } from '@storybook/react';

import { NavLinks } from './NavLinks';

export default {
  title: 'molecules/NavLinks',
  component: NavLinks
} as Meta;

export const Basic: Story = () => <NavLinks />;

import { Story, Meta } from '@storybook/react';

import { SectionAbout } from './SectionAbout';

export default {
  title: 'organisms/SectionAbout',
  component: SectionAbout
} as Meta;

export const Basic: Story = () => <SectionAbout />;

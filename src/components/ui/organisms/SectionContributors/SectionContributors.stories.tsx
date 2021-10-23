import { Story, Meta } from '@storybook/react';
import contributors from '~organisms/SectionContributors/contributors.mock';

import { SectionContributors, SectionContributorsProps } from './SectionContributors';

export default {
  title: 'organisms/SectionContributors',
  component: SectionContributors
} as Meta;

export const Basic: Story<SectionContributorsProps> = (args) => <SectionContributors {...args} />;

Basic.args = {
  contributors: contributors
};

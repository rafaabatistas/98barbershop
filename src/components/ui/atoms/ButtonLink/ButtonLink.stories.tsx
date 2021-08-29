import { Story, Meta } from '@storybook/react';

import { ButtonLink } from './ButtonLink';

export default {
  title: 'ButtonLink',
  component: ButtonLink,
  args: {
    link: 'https://github.com/rafaabatistas/boilerplate-nextjs',
    children: 'GitHubA'
  }
} as Meta;

export const Basic: Story = (args) => (
  <ButtonLink {...args} link={'https://github.com/rafaabatistas/boilerplate-nextjs'}>
    GitHubA
  </ButtonLink>
);

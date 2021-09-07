import { Story, Meta } from '@storybook/react';

import { Description, DescriptionProps } from './Description';

export default {
  title: 'atoms/Description',
  component: Description,
  args: {
    children: 'Rua Caminho Encanto 334 - Guarulhos - SP',
    size: 'medium',
    marginBottom: true
  }
} as Meta;

export const Basic: Story<DescriptionProps> = (args) => <Description {...args} />;

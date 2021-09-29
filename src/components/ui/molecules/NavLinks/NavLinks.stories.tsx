import { Story, Meta } from '@storybook/react';

import { NavLinks, NavLinksProps } from './NavLinks';
import { Logotipo } from '~atoms/Logotipo/Logotipo';
import { NavList } from '../NavList/NavList.styles';

export default {
  title: 'molecules/NavLinks',
  component: NavLinks,
  args: {
    paddingXLine: 10,
    names: ['Home', 'Sobre', 'Serviços', 'Equipe', 'Opinião', 'FeedBack']
  },
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#121212' }]
    },
    layout: 'fullscreen'
  }
} as Meta;

export const Basic: Story<NavLinksProps> = (args) => (
  <NavList>
    <NavLinks {...args}>
      <Logotipo />
    </NavLinks>
  </NavList>
);

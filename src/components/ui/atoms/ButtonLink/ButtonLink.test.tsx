import { render, screen } from '@testing-library/react';

import { ButtonLink } from './ButtonLink';

describe('<ButtonLink />', () => {
  it('Deve renderizar o componente <ButtonLink />', () => {
    const props = {
      link: 'https://github.com/rafaabatistas/boilerplate-nextjs',
      children: 'GitHub'
    };
    //Arrange
    const { container } = render(<ButtonLink {...props} />);
    //Assert
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Verifica se o componente <ButtonLink /> é um link', () => {
    const props = {
      link: 'https://github.com/rafaabatistas/boilerplate-nextjs',
      children: 'GitHub'
    };
    render(<ButtonLink {...props} />);
    //Arrange
    const Link = screen.getByRole('link');
    //Assert
    expect(Link).toHaveAttribute('href');
  });
});

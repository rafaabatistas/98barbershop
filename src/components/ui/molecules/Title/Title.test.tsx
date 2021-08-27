import { render } from '@testing-library/react';

import { Title } from './Title';

describe('<Title />', () => {
  it('Deve renderizar o componente <Title />', () => {
    //Arrange
    const props = {
      icon: 'assets/img/icon-react.png',
      alt: 'Ícone com logotipo do nextJS e ao lado escrito Boilerplate NextJS',
      title: 'Boilerplate NextJS'
    };
    const { container } = render(<Title {...props} />);
    //Assert
    expect(container.firstChild).toMatchSnapshot();
  });
});

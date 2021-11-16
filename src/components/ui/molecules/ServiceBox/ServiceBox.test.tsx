import { screen } from '@testing-library/react';
import { renderWithTheme } from '~src/utils/tests/helpers';

import { ServiceBox, ServiceBoxProps } from './ServiceBox';

import services from './mock';

const props: ServiceBoxProps = {
  infos: services,
  type: 'hair'
};

jest.mock('~atoms/HairIcon/HairIcon', () => ({
  __esModule: true,
  HairIcon: function Mock() {
    return <div data-testid="Hair Icon" />;
  }
}));

describe('<ServiceBox />', () => {
  it('Deve renderizar o componente <ServiceBox />', () => {
    //Arrange
    const { container } = renderWithTheme(<ServiceBox {...props} />);
    //Assert
    expect(screen.getByTestId(/Hair Icon/i)).toBeInTheDocument();

    expect(screen.getAllByRole('heading')).toHaveLength(3);
    expect(screen.getByText('R$ 40,00')).toBeInTheDocument();

    expect(screen.getAllByText('R$ 30,00')).toHaveLength(2);

    expect(container.firstChild).toMatchSnapshot();
  });
});

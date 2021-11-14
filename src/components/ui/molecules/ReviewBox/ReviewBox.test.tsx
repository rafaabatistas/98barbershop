import { screen } from '@testing-library/react';
import { renderWithTheme } from '~src/utils/tests/helpers';

import { ReviewBox } from './ReviewBox';

jest.mock('~atoms/UserInfo/UserInfo', () => ({
  __esModule: true,
  UserInfo: function Mock() {
    return <div data-testid="UserInfo" />;
  }
}));

describe('<ReviewBox />', () => {
  it('Deve renderizar o componente <ReviewBox />', () => {
    //Arrange
    const { container } = renderWithTheme(
      <ReviewBox
        answered="cleber_mariano"
        stars={5}
        feedback="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout"
        name="gabriel"
        surname="guedes"
      />
    );
    //Assert
    expect(screen.getByText(/cleber/i)).toBeInTheDocument;
    expect(screen.getAllByLabelText(/Star/i)).toHaveLength(5);
    expect(
      screen.getByRole('heading', {
        name: /It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout/i
      })
    ).toBeInTheDocument();

    expect(screen.getByTestId(/UserInfo/i)).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});

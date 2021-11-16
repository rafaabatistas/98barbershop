import { render, screen } from '@testing-library/react';
import 'jest-styled-components';

import MediaMatch from './MediaMatch';

describe('<MediaMatch />', () => {
  let desktopHeading: Element;
  let mobileHeading: Element;

  beforeEach(() => {
    render(
      <>
        <MediaMatch greaterThan="medium">
          <h1 data-testid="desktop">Desktop</h1>
        </MediaMatch>
        <MediaMatch lessThan="medium">
          <h1 data-testid="mobile">Mobile</h1>
        </MediaMatch>
      </>
    );

    desktopHeading = screen.getByTestId('desktop');
    mobileHeading = screen.getByTestId('mobile');
  });

  it('Deve ser ocultado o componente <MediaMatch /> se nenhuma consulta de media for passada', () => {
    //Assert
    expect(desktopHeading.parentElement).toHaveStyleRule('display', 'none');
    expect(mobileHeading.parentElement).toHaveStyleRule('display', 'none');
  });

  it('Deve mostrar ou ocultar o componente <MediaMatch /> com base na mídia passada', () => {
    //Assert
    expect(desktopHeading.parentElement).toHaveStyleRule('display', 'block', { media: '(min-width: 769px)' });
    expect(mobileHeading.parentElement).toHaveStyleRule('display', 'block', { media: '(max-width: 768px)' });
  });
});

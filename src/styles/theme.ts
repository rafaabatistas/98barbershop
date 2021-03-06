export default {
  grid: {
    container: '129rem'
  },
  border: {
    radius: {
      light: '1rem',
      regular: '2rem',
      medium: '4rem',
      large: '5rem'
    }
  },
  font: {
    family: {
      primary: 'Dancing Script',
      secundary: 'Abril Fatface',
      textReview: 'Kaushan Script',
      tertiary:
        "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
    },
    thin: 300,
    light: 400,
    regular: 500,
    medium: 600,
    bold: 700,
    sizes: {
      xxsmall: '1rem',
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      xmedium: '1.8rem',
      xxmedium: '2.0rem',
      big: '2.2rem',
      xbig: '2.5rem',
      xxbig: '3.0rem',
      large: '3.5rem',
      xlarge: '4.5rem',
      xxlarge: '5.0rem',
      extra: '6.0rem'
    }
  },
  colors: {
    primary: '#1affea',
    secondary: '#3abcbf',
    starOff: '#d3d3d3',
    mainBg: '#333333',
    white: '#FFFFFF',
    lightRed: '#F17575',
    lightGray: '#EEEEEE',
    textGray: '#282828',
    textName: '#A5A5A5',
    gray: '#181818',
    darkGray: '#080808',
    black: '#000000'
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem',
    big: '5.8rem',
    huge: '8.0rem',
    section: '10rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  }
} as const;

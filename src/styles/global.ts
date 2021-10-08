import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local('Poppins 300'),
      url('/fonts/poppins-v15-latin-300.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Poppins Regular'),
      url('/fonts/poppins-v15-latin-regular.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: local('Poppins 500'),
      url('/fonts/poppins-v15-latin-500.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local('Poppins 600'),
      url('/fonts/poppins-v15-latin-600.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local('Poppins 700'),
      url('/fonts/poppins-v15-latin-700.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Abril Fatface';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Abril Fatface'),
      url('/fonts/abril-fatface-v12-latin-regular.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Dancing Script';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Dancing Script Regular'),
      url('/fonts/dancing-script-v16-latin-regular.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Dancing Script';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: local('Dancing Script 500'),
      url('/fonts/dancing-script-v16-latin-500.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Dancing Script';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local('Dancing Script 700'),
      url('/fonts/dancing-script-v16-latin-700.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Kaushan Script';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Dancing Script 700'),
      url('../fonts/kaushan-script-v9-latin-regular.woff2') format('woff2');
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 62.5%;
  }

  ${({ theme }) => css`
    body {
      font-family: ${theme.font.family.tertiary};
      background: ${theme.colors.darkGray};
    }

    .active {
      color: ${theme.colors.primary};
      text-shadow: 0 0 3rem rgba(26, 255, 234, 0.2), 0 0 1.5rem rgba(26, 255, 234, 0.4),
        0 0 1rem rgba(26, 255, 234, 0.4), 0 0 5rem rgba(26, 255, 234, 0.2);
    }
  `}
  
  button {
    cursor: pointer;
    border-style: none;
  }

  button:focus {
    outline: none;
  }

  
`;

export default GlobalStyles;

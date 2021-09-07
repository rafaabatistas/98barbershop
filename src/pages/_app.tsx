import Head from 'next/head';

import type { AppProps } from 'next/app';

import GlobalStyles from '~styles/global';
import { ThemeProvider } from 'styled-components';
import theme from '~styles/theme';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>98Barbershop</title>
        <link rel="shortcut icon" href="assets/img/icon-logo.png" type="image/x-icon" />
        <link rel="apple-touch-icon" href="assets/img/icon-logo.png" type="image/x-icon" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#333333" />
        <meta name="description" content="98Barbershop, sua barbearia preferida agora em uma plataforma." />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;

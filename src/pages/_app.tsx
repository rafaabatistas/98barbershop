import Head from 'next/head';

import type { AppProps } from 'next/app';

import ContextProviders from '~contexts/contextUtils/providers';
import GlobalStyles from '~styles/global';
import { ThemeProvider } from 'styled-components';
import theme from '~styles/theme';

function App({ Component, pageProps }: AppProps) {
  return (
    <ContextProviders>
      <ThemeProvider theme={theme}>
        <Head>
          <title>98Barbershop</title>
          <link rel="shortcut icon" href="assets/img/icon-logo.png" type="image/x-icon" />
          <link rel="apple-touch-icon" href="assets/img/icon-logo.png" type="image/x-icon" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#333333" />
          <meta name="description" content="98Barbershop, sua barbearia preferida agora em uma plataforma." />
          <link
            rel="stylesheet"
            href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
            integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
            crossOrigin=""
          />
        </Head>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </ContextProviders>
  );
}

export default App;

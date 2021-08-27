import Head from 'next/head';

import type { AppProps } from 'next/app';

import GlobalStyles from '~styles/global';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Boilerplate NextJS</title>
        <link rel="shortcut icon" href="assets/img/icon-react.png" type="image/x-icon" />
        <link rel="apple-touch-icon" href="assets/img/icon-react.png" type="image/x-icon" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#19062b" />
        <meta name="description" content="Simples projeto iniciado com Typescript, NextJS, React, Styled-Components" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default App;

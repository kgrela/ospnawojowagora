import { AppProps } from 'next/app';
import Head from 'next/head';

import 'styles/globals.css';
import Logo from 'assets/images/logo.png';
import Layout from 'components/Layout';

function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <link rel="shortcut icon" href={Logo.src} type="image/x-icon" />
        <title>OSP Nawojowa Góra</title>
        <meta name="description" content="OSP Nawojowa Góra" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;

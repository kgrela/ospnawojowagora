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
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;

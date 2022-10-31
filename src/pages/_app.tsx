import { AppProps } from 'next/app';
import Head from 'next/head';

import 'styles/globals.css';
import Layout from 'components/Layout';
import { BASE_PATH } from 'common/constants';

function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <base href={BASE_PATH + '/'} />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;

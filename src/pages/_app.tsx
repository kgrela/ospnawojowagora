import { AppProps } from 'next/app';
import Head from 'next/head';
import { AnimatePresence, motion } from 'framer-motion';

import 'styles/globals.css';
import Logo from 'assets/images/logo.png';
import Layout from 'components/Layout';

function App({ Component, pageProps, router }: AppProps) {
  return (
    <Layout>
      <Head>
        <link rel="shortcut icon" href={Logo.src} type="image/x-icon" />
        <title>OSP Nawojowa Góra</title>
        <meta name="description" content="OSP Nawojowa Góra" />
      </Head>
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          transition={{ duration: 0.075 }}
          initial={{ opacity: 0, translateY: 5 }}
          animate={{ opacity: 1, translateY: 0 }}
          exit={{ opacity: 0, translateY: 5 }}
          key={router.pathname}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

export default App;

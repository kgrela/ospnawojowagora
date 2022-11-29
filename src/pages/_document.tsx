import { Head, Html, Main, NextScript } from 'next/document';

import { getAssetUrl } from 'lib/assetUrl';

const Document = () => {
  return (
    <Html className="overflow-y-auto">
      <Head>
        <link rel="shortcut icon" href={getAssetUrl('/logo.png')} type="image/x-icon" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Oxanium:wght@200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;

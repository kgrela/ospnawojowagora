import { Head, Html, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html lang="pl" className="overflow-y-scroll">
      <Head />
      <body style={{ WebkitTapHighlightColor: 'transparent' }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;

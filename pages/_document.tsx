import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="lt">
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Dosis&display=swap"
        />
      </Head>
      <body className="bg-slate-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

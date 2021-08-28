import "../styles/globals.scss";
import Head from "next/head";
import { Fragment } from "react";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>A Contentful Next App</title>
        <meta description="Blog built with NextJS and Contentful" />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;

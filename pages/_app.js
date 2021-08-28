import "../styles/globals.scss";
import Head from "next/head";
import { Fragment } from "react";
import Layout from "../components/Layout/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>A Contentful Next App</title>
        <meta description="Blog built with NextJS and Contentful" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Fragment>
  );
}

export default MyApp;

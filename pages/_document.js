import Document from "next/document";
import { Html, Head, Main, NextScript } from "next/document";
class AppDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="description"
            content="Blog built with NextJS and Contentful"
          />
        </Head>
        <body>
          <Main></Main>
          <NextScript></NextScript>
        </body>
      </Html>
    );
  }
}
export default AppDocument;

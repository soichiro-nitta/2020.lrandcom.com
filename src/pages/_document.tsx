import * as React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render(): React.ReactElement {
    return (
      <Html lang="ja">
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Noto+Sans+JP&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument

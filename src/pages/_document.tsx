import Document, {Html, Head, Main, NextScript} from 'next/document'

export default class MyDocument extends Document{
  render() {
    return(
      <Html>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
          <link rel="stylesheet"href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
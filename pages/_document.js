import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render () {
    return (
      <html>
        <Head>
          <title>小程序应用商店</title>
          <meta charSet='utf-8' />
          <meta httpEquiv='X-UA-Compatible' content='IE=edge,chrome=1' />
          <meta name='renderer' content='webkit' />
          <meta httpEquiv='Cache-Control' content='no-siteapp' />
          <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' />
          <link rel='stylesheet' type='text/css' href='/static/styles/antd.min.css' />
        </Head>
        <body style={{ backgroundColor: '#F9F9F9' }}>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

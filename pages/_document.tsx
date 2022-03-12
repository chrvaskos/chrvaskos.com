import React, { ReactElement } from 'react'
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentInitialProps,
  DocumentContext,
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import Favicons from 'components/Head/Favicons'

/** Document Class */
export default class MyDocument extends Document {
  /**
   * Description
   * @param {DocumentContext} ctx
   * @returns {any}
   */
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
  /**
   * Description
   * @return {any}
   */
  render(): ReactElement {
    return (
      <Html lang="en-GB">
        <Head>
          <Favicons />
          <meta charSet="utf-8" />
          <link rel="sitemap" href="sitemap.xml" type="application/xml" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

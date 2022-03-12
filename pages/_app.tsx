import type { AppProps } from 'next/app'
import React from 'react'
import '../styles.css'
import { GlobalStyles } from 'styles/GlobalStyles'
import { ThemeProvider } from 'next-themes'

/**
 * App
 * @return {JSX.Element} The JSX Code for the _app file
 */

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider disableTransitionOnChange attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp

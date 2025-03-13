import NextApp from 'next/app'
import * as React from 'react'
import { ThemeUIProvider } from 'theme-ui'
import theme from '../lib/theme'

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeUIProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeUIProvider>
    )
  }
}

import * as React from 'react'
import NextApp from 'next/app'
import Footer from '../components/footer'

// import '@hackclub/theme/fonts/reg-bold.css'
import theme from '../lib/theme'
import { ThemeUIProvider } from 'theme-ui'
import ColorSwitcher from '../components/color-switcher'
import Meta from '../components/meta'

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeUIProvider theme={theme}>
        <Meta />
        <ColorSwitcher />
        <Component {...pageProps} />
        <Footer />
      </ThemeUIProvider>
    )
  }
}

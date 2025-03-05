import * as React from 'react'
import NextApp from 'next/app'

// import '@hackclub/theme/fonts/reg-bold.css'
import theme from '@hackclub/theme'
import { ThemeProvider } from 'theme-ui'
import ColorSwitcher from '../components/color-switcher'
import Head from 'next/head'
import Meta from '@hackclub/meta'

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Meta
          as={Head}
          name="Hack Club MCHS"
          title="Home"
          description="Welcome to Hack Club MCHS"
          image="/card.png"
          color="#5901c9"
        />
        <ColorSwitcher />
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}

import React from 'react'
import App, {Container} from 'next/app'
import Head from 'next/head'
import NProgress from 'nprogress'
import Router from 'next/router'

Router.events.on('routeChangeStart', url => {
  console.log(`Loading: ${url}`)
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

export default class MyApp extends App {
  static async getInitialProps ({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render () {
    const { Component, pageProps } = this.props
    return  (
        <Container>
            <Head>
                <title>WWWID - PWA</title>
            </Head>
            <Component {...pageProps} />
        </Container>
    )
  }
}

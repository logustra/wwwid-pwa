import React from 'react'
import App, {Container} from 'next/app'
import Head from 'next/head'
import NProgress from 'nprogress'
import Router, {withRouter} from 'next/router'

import {RouterContext} from '../store'

Router.events.on('routeChangeStart', (url: string) => {
  console.log(`Loading: ${url}`)
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const InjectRouterContext = withRouter(({ router, children }) => {
    return (
        <RouterContext.Provider value={router}>
            {children}
        </RouterContext.Provider>
    )
})

export default class MyApp extends App {
  render () {
    const {Component, pageProps} = this.props

    return  (
        <Container>
            <Head>
                <title>WWWID - PWA</title>
            </Head>
            <InjectRouterContext>
                <Component {...pageProps} />
            </InjectRouterContext>
        </Container>
    )
  }
}

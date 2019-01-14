import Document, { Head, Main, NextScript } from 'next/document'
import ServiceWorker from 'next-workbox/service-worker'
import Manifest from 'next-manifest/manifest'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
    static getInitialProps({ renderPage }) {
        const sheet = new ServerStyleSheet()
        const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
        const styleTags = sheet.getStyleElement()
        return { ...page, styleTags }
    }

    render () {
        return (
            <html lang="id">
                <Head>
                    <Manifest
                        href='./static/manifest/manifest.json'
                        initialScale='1'
                    />
                    <meta name="description" content="WWWID - challenge | Making web applications can be used less than 5 seconds" />
                    <link rel="icon" href="./static/favicon.ico" />
                    <link rel='stylesheet' href='./static/css/nprogress.min.css' />
                    {this.props.styleTags}
                </Head>

                <body>
                    <Main />
                    <NextScript />
                    <ServiceWorker
                        src={'./static/workbox/sw.js'}
                        scope={'/'}
                    />
                </body>
            </html>
        )
    }
}

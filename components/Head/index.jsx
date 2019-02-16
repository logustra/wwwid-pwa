import NextHead from 'next/head'

const defaultDescription = 'WWWID - challenge | Making web applications can be used less than 5 seconds'
const defultTitle = 'WWWID - PWA'

const Head = props => (
    <NextHead>
        <title>{props.title || defultTitle}</title>
        <meta name="description" content={props.description || defaultDescription} />
    </NextHead>
)

export default Head

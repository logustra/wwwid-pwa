import NextHead from 'next/head'
import {string} from 'prop-types'

export default function Head(props) {
    const defaultDescription = 'WWWID - challenge | Making web applications can be used less than 5 seconds'
    const defultTitle = 'WWWID - PWA'

    return (
        <NextHead>
            <title>{props.title || defultTitle}</title>
            <meta name="description" content={props.description || defaultDescription} />
        </NextHead>
    )
}

Head.propTypes = {
    title: string,
    description: string
}

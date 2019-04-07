import NextHead from 'next/head'

interface Props {
    title?: string
    description?: string
}

export default function Head(props: Props): JSX.Element {
    const defaultDescription = 'WWWID - challenge | Making web applications can be used less than 5 seconds'
    const defultTitle = 'WWWID - PWA'

    return (
        <NextHead>
            <title>{props.title || defultTitle}</title>
            <meta name="description" content={props.description || defaultDescription} />
        </NextHead>
    )
}

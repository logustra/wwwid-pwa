import Link from 'next/link'
import {string} from 'prop-types'

export default function FooterItem(props) {
    let item

    if (props.type === 'next-link') {
        item = (
            <li className={props.class}>
                <Link href={props.slug}>
                    <a>{props.name}</a>
                </Link>
            </li>
        )
    } else {
        item = (
            <li className={props.class}>
                <a href={props.slug}>
                    {props.name}
                </a>
            </li>
        )
    }

    return item
}

FooterItem.propTypes = {
    type: string,
    class: string,
    link: string,
    name: string
}

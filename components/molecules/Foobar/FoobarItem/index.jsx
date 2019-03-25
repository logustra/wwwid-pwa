import Link from 'next/link'
import {string} from 'prop-types'

import {ListItem} from '../../../atoms'

export default function FooterItem(props) {
    let item

    if (props.type === 'next-link') {
        item = (
            <ListItem>
                <Link href={props.slug}>
                    <a>{props.name}</a>
                </Link>
            </ListItem>
        )
    } else {
        item = (
            <ListItem>
                <a href={props.slug}>
                    {props.name}
                </a>
            </ListItem>
        )
    }

    return item
}

FooterItem.propTypes = {
    type: string,
    link: string,
    name: string
}

import Link from 'next/link'

import {ListItem} from '../../../atoms'

interface Props {
    type: string,
    name: string,
    slug: string
}

export default function FooterItem(props: Props): JSX.Element {
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

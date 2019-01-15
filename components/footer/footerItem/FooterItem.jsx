import Link from 'next/link'

const FooterItem = (props) => {
    let item

    if (props.type === 'next-link') {
        item = (
            <li className={props.class}>
                <Link href={props.link}>
                    <a>{props.name}</a>
                </Link>
            </li>
        )
    } else {
        item = (
            <li className={props.class}>
                <a href={props.link}>
                    {props.name}
                </a>
            </li>
        )
    }

    return item
}

export default FooterItem

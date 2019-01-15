import Link from 'next/link'

const NavigationItem = (props) => {
    return (
        <li className={props.class}>
            <Link href={props.url}>
                <a>{props.name}</a>
            </Link>
        </li>
    )
}

export default NavigationItem

import Link from 'next/link'

export default function NavbarItem(props) {
    return (
        <li className={props.class}>
            <Link href={props.slug}>
                <a>{props.name}</a>
            </Link>
        </li>
    )
}

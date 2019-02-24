import Link from 'next/link'

export default function NavbarItem(props) {
    function renderItem(data) {
        if (data.img) {
            return <img src={data.img} alt={data.name} />
        } else {
            return <a>{data.name}</a>
        }
    }

    return (
        <li className={props.class}>
            <Link href={props.slug}>
                {renderItem(props)}
            </Link>
        </li>
    )
}

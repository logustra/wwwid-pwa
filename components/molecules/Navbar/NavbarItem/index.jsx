import Link from 'next/link'

import {ListItem} from '../../../atoms'

export default function NavbarItem(props) {
    function renderItem(data) {
        if (data.img) {
            return <img src={data.img} alt={data.name} />
        } else {
            return <a>{data.name}</a>
        }
    }

    return (
        <ListItem>
            <Link href={props.slug}>
                {renderItem(props)}
            </Link>
        </ListItem>
    )
}

import Link from 'next/link'

import {ListItem} from '../../../atoms'

interface Props {
    name: string
    slug: string
    img: string
}

export default function NavbarItem(props: Props): JSX.Element {
    function renderItem(data: {name: string, img: string}) {
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

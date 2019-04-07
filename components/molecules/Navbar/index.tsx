import React from "react"
import NavbarItem from './NavbarItem'

import {List} from '../../atoms'
import {Container} from '../../templates'
import StyledNavbar from './style'

// import ImgLogo from '../../../static/images/logo.svg'

interface navbarItems {
    id: string
    name: string
    slug: string
    [key: string]: string
}

export default function Navbar(): JSX.Element {
    const navbarItems: navbarItems[] = [
        {
            id: 'w1',
            name: 'WWWID',
            slug: '/',
            img: 'https://assets.zeit.co/image/upload/front/assets/design/white-nextjs.png',
        },
        {
            id: 'c2',
            name: 'Categories',
            slug: '/categories?title=categories',
        }
    ]

    function renderNavbarItems(data: {[key: string]: string}[]) {
        return data.map(item => (
            <NavbarItem
                key={item.id}
                slug={item.slug}
                name={item.name}
                img={item.img}
            />
        ))
    }

    return (
        <StyledNavbar>
            <Container>
                <List
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    {renderNavbarItems(navbarItems)}
                </List>
            </Container>
        </StyledNavbar>
    )
}

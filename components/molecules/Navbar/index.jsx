import React from "react"
import NavbarItem from './NavbarItem'

import {List} from '../../atoms'
import {Container} from '../../templates'
import StyledNavbar from './style'

import ImgLogo from '../../../static/images/logo.svg'

export default function Navbar(props) {
    const navbarItems = [
        {
            id: 'w1',
            name: 'WWWID',
            slug: '/',
            img: ImgLogo,
        },
        {
            id: 'c2',
            name: 'Categories',
            slug: '/categories?title=categories',
        }
    ]

    function renderNavbarItems(data) {
        return data.map(item => (
            <NavbarItem
                key={item.id}
                slug={item.slug}
                name={item.name}
                img={item.img}
                class="list-item"
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

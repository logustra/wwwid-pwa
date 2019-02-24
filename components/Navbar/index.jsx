import React, { Component } from "react"
import NavbarItem from './NavbarItem'

import {Container} from '../../styles'
import StyledNavbar from './style'

export default function Navbar(props) {
    const navbarItems = [
        {
            id: 'w1',
            name: 'WWWID',
            slug: '/',
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
                class="list-item"
            />
        ))
    }

    return (
        <StyledNavbar className="with-background">
            <Container>
                <ul className="list-styled">
                    {renderNavbarItems(navbarItems)}
                </ul>
            </Container>
        </StyledNavbar>
    )
}

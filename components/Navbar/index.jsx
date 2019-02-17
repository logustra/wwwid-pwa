import React, { Component } from "react"
import NavbarItem from './NavbarItem'

import StyledNavbar from './styles'

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
        <StyledNavbar className="with-background mb-3">
            <div className="container">
                <ul className="list-styled">
                    {renderNavbarItems(navbarItems)}
                </ul>
            </div>
        </StyledNavbar>
    )
}

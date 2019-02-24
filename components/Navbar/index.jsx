import React, { Component } from "react"
import NavbarItem from './NavbarItem'

import {Container} from '../../styles'
import StyledNavbar from './style'

import ImgLogo from '../../static/images/logo.svg'

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
                <ul className="list-styled">
                    {renderNavbarItems(navbarItems)}
                </ul>
            </Container>
        </StyledNavbar>
    )
}

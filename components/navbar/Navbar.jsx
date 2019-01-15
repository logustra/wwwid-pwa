import React, { Component } from "react"
import Styled from 'styled-components'
import NavbarItem from './navbarItem/NavbarItem';

const StyledNavbar = Styled.nav`
    .list-item:first-child {
        font-size: 24px;
        font-weight: 700;

        a {
            color: var(--blue);
        }
    }
`

class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            navbarItems: [
                {
                    name: 'WWWID',
                    link: '/',
                },
                {
                    name: 'Categories',
                    link: '/categories',
                }
            ]
        }
    }

    render() {
        const NavbarItems = this.state.navbarItems.map((item, index) => {
            return (
                <NavbarItem
                    url={item.link}
                    name={item.name}
                    class="list-item"
                    key={index}
                />
            )
        })

        return (
            <StyledNavbar className="with-background mb-3">
                <div className="container">
                    <ul className="list-styled">
                        {NavbarItems}
                    </ul>
                </div>
            </StyledNavbar>
        )
    }
}

export default Navbar;

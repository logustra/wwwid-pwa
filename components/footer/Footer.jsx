import React, { Component } from "react"
import Styled from 'styled-components'
import FooterItem from './footerItem/FooterItem';

class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            footerItems: [
                {
                    name: 'Github',
                    link: 'https://github.com/logustra',
                },
                {
                    name: 'Facebook',
                    link: 'https://www.facebook.com/logustra',
                },
                {
                    name: 'About',
                    link: '/about',
                },
                {
                    name: 'Linkedin',
                    link: 'https://www.linkedin.com/in/logustra/',
                },
                {
                    name: 'Medium',
                    link: 'https://medium.com/@logustra',
                }
            ]
        }
    }

    render() {
        const FooterItems = this.state.footerItems.map((item, index) => {
            return (
                <FooterItem
                    link={item.link}
                    name={item.name}
                    class="list-item"
                    key={index}
                    type={item.name === 'About' ? 'next-link' : 'html-link'}
                />
            )
        })

        return (
            <footer className="with-background mt-3">
                <div className="container">
                    <ul className="list-styled">
                        {FooterItems}
                    </ul>
                </div>
            </footer>
        )
    }
}

export default Navbar;

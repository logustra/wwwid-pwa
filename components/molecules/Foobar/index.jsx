import React from "react"

import {Colors} from '../../_base'

import {Container} from '../../templates'
import {List} from '../../atoms'
import StyledFooter from './style'

import FoobarItem from './FoobarItem';

export default function Foobar() {
    const foobarItems = [
        {
            id: 'g1',
            name: 'Github',
            slug: 'https://github.com/logustra',
        },
        {
            id: 'f2',
            name: 'Facebook',
            slug: 'https://www.facebook.com/logustra',
        },
        {
            id: 'a3',
            name: 'About',
            slug: '/about',
        },
        {
            id: 'l4',
            name: 'Linkedin',
            slug: 'https://www.linkedin.com/in/logustra/',
        },
        {
            id: 'm5',
            name: 'Medium',
            slug: 'https://medium.com/@logustra',
        }
    ]

    function renderArticles(data) {
        return data.map(item => (
            <FoobarItem
                key={item.id}
                slug={item.slug}
                name={item.name}
                type={item.name === 'About' ? 'next-link' : 'html-link'}
            />
        ))
    }

    return (
        <StyledFooter background={Colors.white}>
            <Container>
                <List
                    display="flex"
                    justifyContent="space-between"
                >
                    {renderArticles(foobarItems)}
                </List>
            </Container>
        </StyledFooter>
    )
}

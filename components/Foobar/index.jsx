import React from "react"
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
                class="list-item"
                type={item.name === 'About' ? 'next-link' : 'html-link'}
            />
        ))
    }

    return (
        <footer className="with-background mt-3">
            <div className="container">
                <ul className="list-styled">
                    {renderArticles(foobarItems)}
                </ul>
            </div>
        </footer>
    )
}

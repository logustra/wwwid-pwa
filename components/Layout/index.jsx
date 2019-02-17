import React from 'react'
import Head from '../Head'
import Navbar from '../Navbar'
import Foobar from '../Foobar';

import GlobalStyle from '../../styles/Main'

export default function Layout(props) {
    return (
        <React.Fragment>
            <Head title={props.title} description={props.description} />
            <GlobalStyle />
            <Navbar />
            <main>
                <div className="container">
                    {props.children}
                </div>
            </main>
            <Foobar />
        </React.Fragment>
    )
}

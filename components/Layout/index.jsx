import React, {Fragment} from 'react'
import Head from '../Head'
import Navbar from '../Navbar'
import Foobar from '../Foobar';

import GlobalStyle from '../../styles'

export default function Layout(props) {
    return (
        <Fragment>
            <Head title={props.title} description={props.description} />
            <GlobalStyle />
            <Navbar />
            <main>
                {props.children}
            </main>
            <Foobar />
        </Fragment>
    )
}

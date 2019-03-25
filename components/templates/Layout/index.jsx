import React, {Fragment} from 'react'

import {Base} from '../../_base'
import {Navbar, Foobar} from '../../molecules'
import Head from '../Head'
import Spacing from '../Spacing'
import Text from '../Text'

export default function Layout(props) {
    return (
        <Fragment>
            <Head title={props.title} description={props.description} />
            <Base />
            <Spacing />
            <Text />
            <Navbar />
            <main>
                {props.children}
            </main>
            <Foobar />
        </Fragment>
    )
}

import React, {Fragment} from 'react'

import {
    Colors,
    Fonts,
    Spacing,
    Base,
} from './base'

import {
    Container,
    ListInline,
    ListInlineItem,
} from './components'

import {
    MediaQueryMax,
    MediaQueryMin
} from './utils'

export {
    Colors,
    Fonts,
    Container,
    ListInline,
    ListInlineItem,
    MediaQueryMax,
    MediaQueryMin
}

export default function Style() {
    return (
        <Fragment>
            <Spacing />
            <Base />
        </Fragment>
    )
}

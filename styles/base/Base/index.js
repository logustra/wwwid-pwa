import {createGlobalStyle} from 'styled-components'

import {
    Colors,
    Fonts
} from '../'

const GlobalStyleBase = createGlobalStyle `
    body {
        font-family: ${Fonts.family.systemUI};
        font-size: ${Fonts.size.md[16]};
        color: ${Colors.midnight};
        background: ${Colors.smoke};
        margin: 0;
    }

    a {
        text-decoration: none;
        color: ${Colors.midnight};
    }

    .list-styled {
        padding-left: 0;
        margin-top: 0;
        margin-bottom: 0;

        .list-item {
            display: inline;
        }

        .list-item + .list-item {
            padding-left: 10px;
        }
    }

    .with-background {
        background: ${Colors.white};
        display: flex;
        align-items: center;

        .list-styled {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }
`

export default GlobalStyleBase

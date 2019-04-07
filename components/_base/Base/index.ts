import {createGlobalStyle} from 'styled-components'

import {Colors, Fonts} from '../';

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
`

export default GlobalStyleBase

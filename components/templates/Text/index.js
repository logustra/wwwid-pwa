import {createGlobalStyle} from 'styled-components'

const Text = createGlobalStyle `
    .text-left {
        text-align: left;
    }

    .text-center {
        text-align: center;
    }

    .text-right {
        text-align: right;
    }

    .text-lowercase {
        text-transform: lowercase;
    }

    .text-uppercase {
        text-transform: uppercase;
    }

    .text-capitalize {
        text-transform: capitalize;
    }
`
export default Text

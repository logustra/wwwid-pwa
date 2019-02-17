import {createGlobalStyle} from 'styled-components'

const GlobalStyleBase = createGlobalStyle`
    body {
        font-family: 'Lato', sans-serif;
        font-size: 16px;
        color: var(--midnight);
        background: var(--smoke);
        margin: 0;
    }

    a {
        text-decoration: none;
        color: var(--midnight);
    }

    .container {
        width: 89%;
        padding-left: 20px;
        padding-right: 20px;
        margin-left: auto;
        margin-right: auto;
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
        background: var(--white);
        height: 50px;
        display: flex;
        align-items: center;

        .list-styled {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }

    @media (min-width: 992px) {
        .container {
            width: 77%;
        }
    }
`

export default GlobalStyleBase

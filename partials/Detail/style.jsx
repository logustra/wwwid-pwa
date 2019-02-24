import Styled from 'styled-components'
import {rgba} from 'polished'

import {
    Colors,
    Fonts,
    Container
} from '../../styles'

export const StyledTitle = Styled.h1`
    text-align: center;
    font-size: ${Fonts.size.xl[38]};
    margin-top: 0;
    font-weight: ${Fonts.weight.bold};
`

export const StyledDescription = Styled.div`
    font-size: ${Fonts.size.lg[21]};
    font-family: ${Fonts.family.georgia};
    padding-left: 100px;
    padding-right: 100px;
    line-height: 1.8em;

    h3 {
        font-family: ${Fonts.family.systemUI};
        font-size: ${Fonts.size.xl[34]}
    }

    a {
        color: ${Colors.blue};
    }

    img {
        display: block;
        max-width: 100%;
        margin: 0 auto;
    }

    pre {
        padding: 20px 20px 20px 20px;
        font-size: ${Fonts.size.md[16]};;
        background-color: ${rgba(Colors.darkSmoke, .5)};
        margin-top: 35px;
        white-space: pre-wrap;
        margin-bottom: 0;

        & + pre {
            margin-top: 0;
            padding-top: 4px;
        }
    }

    blockquote {
        color: ${rgba(Colors.mediumMidnight, .58)};
        font-size: ${Fonts.size.xl[30]};
        font-style: italic;
        margin-top: 35px;
        line-height: 1.4;
        font-family: ${Fonts.family.systemUI};
        margin-bottom: 35px;
        letter-spacing: -.005em;
    }

    figcaption {
        font-family: ${Fonts.family.systemUI};
        font-size: ${Fonts.size.md[12]};
        color: ${Colors.mediumMidnight};
        text-align: center;
    }
`

const StyledDetail = Styled.div`
   ${Container} {
        padding-top: 50px;
        padding-bottom: 50px;
   }
`

export default StyledDetail

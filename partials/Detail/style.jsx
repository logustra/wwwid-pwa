import Styled from 'styled-components'
import {rgba} from 'polished'

import {
    Colors,
    Fonts,
    Container,
    ListInline,
} from '../../styles'

export const StyledTitle = Styled.h1`
    text-align: center;
    font-size: ${Fonts.size.xl[38]};
    margin-top: 0;
    margin-bottom: 50px;
    font-weight: ${Fonts.weight.bold};
`

export const StyledThumbnail = Styled.img`
    width: 100%;
    height: 586px;
    object-fit: cover;
`

export const StyledDescription = Styled.div`
    font-size: ${Fonts.size.lg[21]};
    font-family: ${Fonts.family.georgia};
    padding-left: 100px;
    padding-right: 100px;
    line-height: 1.8em;

    h3 {
        font-family: ${Fonts.family.systemUI};
        font-size: ${Fonts.size.xl[34]};
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
        padding: 20px;
        font-size: 16px;
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
        position: relative;
        margin-top: -250px;
        padding-top: 90px;
        padding-bottom: 90px;
        z-index: 1;

        ${ListInline} {
            margin-top: 50px;
        }
   }
`

export default StyledDetail

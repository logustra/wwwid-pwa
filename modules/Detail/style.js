import Styled from 'styled-components'
import {rgba} from 'polished'

import {Colors, Fonts} from '../../components/_base'

import {
    StyledCard,
    StyledThumbnail,
    StyledTitle,
    StyledDescription,
    StyledList,
    StyledListItem
} from '../../components/atoms'
import {StyledContainer} from '../../components/templates'

const StyledDetail = Styled.div`
    ${StyledThumbnail} {
        width: 100%;
        height: 586px;
    }

    ${StyledContainer} {
        position: relative;
        margin-top: -250px;
        z-index: 1;

        ${StyledCard} {
            padding: 100px;
        }

        ${StyledTitle} {
            margin-top: 0;
            margin-bottom: 100px;
        }

        ${StyledDescription} {
            line-height: 1.8em;

            h3 {
                font-family: ${Fonts.family.systemUI};
                font-size: ${Fonts.size.xl[34]};
            }

            a {
                color: ${Colors.blue};
                overflow-wrap: break-word;

                &:hover {
                    text-decoration: underline;
                }
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
        }

        ${StyledList} {
            margin-top: 50px;
        }

        ${StyledListItem} a {
            padding: 10px;
            border-radius: 4px;
            font-family: ${Fonts.family.systemUI};
            font-size: ${Fonts.size.md[14]};
            color: ${Colors.midnight};
            background-color: ${Colors.mediumSmoke};

            &:hover {
                text-decoration: none;
            }
        }
   }
`

export default StyledDetail

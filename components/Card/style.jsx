import Styled from 'styled-components'
import {rgba} from 'polished'

import {
    Colors,
    Fonts
} from '../../styles'

export const StyledThumbnail = Styled.img `
    min-width: 350px;
    height: 225px;
    object-fit: cover;
    margin: -20px 20px -20px -20px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
`

export const StyledTitle = Styled.h2 `
    font-size: ${Fonts.size.lg[21]};
    margin: 0;
`

export const StyledDescription = Styled.p `
    word-break: break-all;
    color: ${Colors.mediumMidnight};
    line-height: 23px;
    margin: 23px 0;
`

export const StyledInfo = Styled.p `
    font-size: ${Fonts.size.md[13]};
    margin-bottom: 0;

    span + span {
        margin-left: 10px;
    }
`

const StyledCard = Styled.figure`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 185px;
    background: ${Colors.white};
    padding: 20px;
    margin: 0;
    margin-bottom: 30px;
    border-radius: 10px;
    box-shadow: 8px 14px 38px ${rgba(Colors.midnight, .06)}, 1px 3px 8px ${rgba(Colors.midnight, .03)};
    transition: .5s;
    cursor: pointer;

    &:first-of-type {
        margin-top: 95px;
    }

    &:hover {
        transform: scale(1.01);
        transition: .5s;
    }
`

export default StyledCard



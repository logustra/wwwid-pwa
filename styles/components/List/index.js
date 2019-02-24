import Styled from 'styled-components'

import {
    Colors,
    Fonts
} from '../../base'

export const ListInlineItem = Styled.li`
    display: inline;
    padding-right: 10px;

    &:last-of-type {
        padding-right: 0;
    }
`

const ListInline = Styled.ul`
    padding-left: 0;
    margin-top: 0;
    margin-bottom: 0;

    ${ListInlineItem} a {
        background-color: ${
            props => props.background ? Colors.mediumSmoke : ''
        };
        padding: 10px;
        border-radius: 4px;
        font-family: ${Fonts.family.systemUI};
        font-size: ${Fonts.size.md[14]};
        color: ${Colors.midnight}
    }
`

export default ListInline

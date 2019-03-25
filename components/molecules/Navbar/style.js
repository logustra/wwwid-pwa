import Styled from 'styled-components'
import {rgba} from 'polished'

import {Colors} from '../../_base'

import {StyledListItem} from '../../atoms'

const StyledNavbar = Styled.nav`
    position: fixed;
    top: 0;
    width: 100%;
    box-shadow: 0 4px 12px 0 ${rgba(Colors.mediumMidnight, .05)};
    z-index: 2;
    height: 65px;
    background-color: ${rgba(Colors.white, .96)};
    display: flex;
    align-items: center;

    ${StyledListItem}:first-child {
        img {
            max-width: 65px;
        }
    }
`

export default StyledNavbar

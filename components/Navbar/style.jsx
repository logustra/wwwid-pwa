import Styled from 'styled-components'
import {rgba} from 'polished'

import {Colors} from '../../styles'

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

    .list-styled {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .list-item:first-child {
        font-size: 24px;
        font-weight: 700;

        img {
            max-width: 65px;
        }

        a {
            color: ${Colors.blue};
        }
    }
`

export default StyledNavbar

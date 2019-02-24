import Styled from 'styled-components'
import {rgba} from 'polished'

import {Colors} from '../../styles'

const StyledNavbar = Styled.nav`
    position: relative;
    box-shadow: 0 4px 12px 0 ${rgba(Colors.mediumMidnight, .05)};
    z-index: 2;
    height: 65px;

    .list-item:first-child {
        font-size: 24px;
        font-weight: 700;

        a {
            color: ${Colors.blue};
        }
    }
`

export default StyledNavbar

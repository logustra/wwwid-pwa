import Styled from 'styled-components'
import {clearFix} from 'polished'

import {MediaQueryMin} from '../../_utils'

const Container = Styled.div `
    width: 89%;
    padding-left: 20px;
    padding-right: 20px;
    margin-left: auto;
    margin-right: auto;
    ${clearFix()}

    ${MediaQueryMin.lg`
        width: 77%;
    `}
`

export default Container

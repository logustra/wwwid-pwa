import Styled from 'styled-components'
import {clearFix} from 'polished'

import {MediaQueryMin} from '../../utils'

const Container = Styled.div `
    width: 89%;
    padding-left: 20px;
    padding-right: 20px;
    margin-left: auto;
    margin-right: auto;
    background-color: ${
        props => props.background ? props.background : props.background
    };

    ${clearFix()}

    ${MediaQueryMin.lg`
        width: 77%;
    `}
`

export default Container

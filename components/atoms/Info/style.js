import Styled from 'styled-components'

import {
    Fonts
} from '../../_base'

const StyledInfo = Styled.p `
    ${
        props => {
            if (props.size === 'md') {
                if (props.md) {
                    return `
                        font-size: ${Fonts.size.md[props.md]};
                    `
                }
            }
        }
    }

    margin-bottom: 0;

    span + span {
        margin-left: 10px;
    }
`

export default StyledInfo

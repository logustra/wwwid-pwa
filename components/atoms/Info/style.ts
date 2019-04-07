import Styled from 'styled-components'

import {
    Fonts
} from '../../_base'

interface Props {
    size?: string
    md?: string
}

const StyledInfo = Styled.p `
    ${
        (props: Props) => {
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

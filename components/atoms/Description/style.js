import Styled from 'styled-components'

import {Fonts} from '../../_base'

const StyledDescription = Styled.div `
    word-break: break-word;

    ${
        props => {
            switch(props.size) {
                case 'md':
                    if (props.md) {
                        return `
                            font-size: ${Fonts.size.md[props.md]};
                        `
                    }
                    break;
                case 'lg':
                    if (props.lg) {
                        return `
                            font-size: ${Fonts.size.lg[props.lg]};
                        `
                    }
                    break;
            }
        }
    }

    ${
        props => props.family && `
            font-family: ${props.family};
        `
    }

    ${
        props => props.color && `
            color: ${props.color};
        `
    }
`

export default StyledDescription

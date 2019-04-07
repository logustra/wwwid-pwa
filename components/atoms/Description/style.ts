import Styled from 'styled-components'

import {Fonts} from '../../_base'

interface Props {
    size?: string
    md?: string
    lg?: string
    family?: string
    color?: string
}

const StyledDescription = Styled.div `
    word-break: break-word;

    ${
        (props: Props) => {
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
        (props: Props) => props.family && `
            font-family: ${props.family};
        `
    }

    ${
        (props: Props) => props.color && `
            color: ${props.color};
        `
    }
`

export default StyledDescription

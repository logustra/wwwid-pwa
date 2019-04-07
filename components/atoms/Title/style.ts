import Styled from 'styled-components'

import {
    Fonts
} from '../../_base'

interface Props {
    size?: string
    lg?: string
    xl?: string
}

const StyledTitle = Styled.h1`
    ${
        (props: Props) => {
            switch(props.size) {
                case 'lg':
                    if (props.lg) {
                        return `
                            font-size: ${Fonts.size.lg[props.lg]};
                        `
                    }
                    break;
                case 'xl':
                    if (props.xl) {
                        return `
                            font-size: ${Fonts.size.xl[props.xl]};
                        `
                    }
                    break;
            }
        }
    }
    font-weight: ${Fonts.weight.bold};
    margin: 0;
`

export default StyledTitle

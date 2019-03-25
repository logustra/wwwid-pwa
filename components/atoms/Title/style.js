import Styled from 'styled-components'

import {
    Fonts
} from '../../_base'

const StyledTitle = Styled.h1 `
    ${
        props => {
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

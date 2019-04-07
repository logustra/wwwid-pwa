import Styled from 'styled-components'
import {rgba} from 'polished'

import {Colors} from '../../_base'

interface Props {
    type?: string
    boxShadow?: boolean
}

const StyledCard = Styled.div`
    background: ${Colors.white};
    padding: 20px;
    ${
        (props: Props) => {
            switch(props.type) {
                case 'rounded':
                    return `
                        border-radius: 10px;
                    `
                case 'rounded-top':
                    return `
                        border-top-left-radius: 10px;
                        border-top-right-radius: 10px;
                    `
            }
        }
    }

    ${
        (props: Props) => props.boxShadow && `
            box-shadow: 8px 14px 38px ${rgba(Colors.midnight, .06)}, 1px 3px 8px ${rgba(Colors.midnight, .03)};
        `
    }
 `

export default StyledCard



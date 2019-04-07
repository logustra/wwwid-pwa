import Styled from 'styled-components'

interface Props {
    display?: string
}

const StyledListItem = Styled.li `
    ${
        (props: Props) => props.display && `
            display: ${props.display};
        `
    }
    padding-right: 10px;

    &:last-of-type {
        padding-right: 0;
    }
`

export default StyledListItem

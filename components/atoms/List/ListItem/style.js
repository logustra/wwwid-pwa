import Styled from 'styled-components'

const StyledListItem = Styled.li `
    ${
        props => props.display && `
            display: ${props.display};
        `
    }
    padding-right: 10px;

    &:last-of-type {
        padding-right: 0;
    }
`

export default StyledListItem

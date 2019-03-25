import Styled from 'styled-components'

const StyledList = Styled.ul`
    display: ${
        props => props.display ? props.display : 'block'
    };

    ${
        props => props.display === 'flex' && props.justifyContent && `
            justify-content: ${props.justifyContent};
        `
    }

    ${
        props => props.display === 'flex' && props.alignItems && `
            align-items: ${props.alignItems};
        `
    }
    padding-left: 0;
    margin-top: 0;
    margin-bottom: 0;
    list-style-type: none;
`

export default StyledList

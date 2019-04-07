import Styled from 'styled-components'

interface Props {
    display?: string
    justifyContent?: string
    alignItems?: string
}

const StyledList = Styled.ul`
    display: ${
        (props: Props) => props.display ? props.display : 'block'
    };

    ${
        (props: Props) => props.display === 'flex' && props.justifyContent && `
            justify-content: ${props.justifyContent};
        `
    }

    ${
        (props: Props) => props.display === 'flex' && props.alignItems && `
            align-items: ${props.alignItems};
        `
    }
    padding-left: 0;
    margin-top: 0;
    margin-bottom: 0;
    list-style-type: none;
`

export default StyledList

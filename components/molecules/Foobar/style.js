import Styled from 'styled-components'

const StyledFooter = Styled.footer`
    display: flex;
    align-items: center;
    position: relative;
    height: 65px;
    z-index: 2;
    ${
        props => props.background && `
            background: ${props.background};
        `
    };
`

export default StyledFooter

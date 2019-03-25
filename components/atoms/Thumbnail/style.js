import Styled from 'styled-components'

const StyledThumbnail = Styled.img `
    object-fit: cover;
    ${
        props => props.type === "rounded-left" && `
            border-top-left-radius: 10px;
            border-bottom-left-radius: 10px;
        `
    }
`

export default StyledThumbnail

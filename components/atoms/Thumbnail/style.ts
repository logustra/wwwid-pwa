import Styled from 'styled-components'

interface Props {
    type?: string
}

const StyledThumbnail = Styled.img `
    object-fit: cover;
    ${
        (props: Props) => props.type === "rounded-left" && `
            border-top-left-radius: 10px;
            border-bottom-left-radius: 10px;
        `
    }
`

export default StyledThumbnail

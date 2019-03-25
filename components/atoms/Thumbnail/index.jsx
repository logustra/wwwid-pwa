import StyledThumbnail from './style'

const Thumbnail = (props) => (
    <StyledThumbnail {...props}>
        {props.children}
    </StyledThumbnail>
)

export {StyledThumbnail}
export default Thumbnail

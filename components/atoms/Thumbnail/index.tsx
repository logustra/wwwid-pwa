import StyledThumbnail from './style'

interface Props {
    type?: string
    src: string
    alt: string
}

const Thumbnail = (props: Props): JSX.Element => (
    <StyledThumbnail {...props} />
)

export {StyledThumbnail}
export default Thumbnail

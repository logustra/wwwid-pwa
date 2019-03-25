import StyledInfo from './style'

const Info = (props) => (
    <StyledInfo {...props}>
        {props.children}
    </StyledInfo>
)

export {StyledInfo}
export default Info

import StyledTitle from './style'

const Title = (props) => (
    <StyledTitle {...props}>
        {props.children}
    </StyledTitle>
)

export {StyledTitle}
export default Title

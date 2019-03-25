import StyledDescription from './style'

const Description = (props) => (
    <StyledDescription {...props}>
        {props.children}
    </StyledDescription>
)

export {StyledDescription}
export default Description

import StyledContainer from './style'

const Container = (props) => (
    <StyledContainer {...props}>
        {props.children}
    </StyledContainer>
)

export {StyledContainer}
export default Container

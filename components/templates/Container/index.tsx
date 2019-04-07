import StyledContainer from './style'

interface Props {
    children: any
}

const Container = (props: Props): JSX.Element => (
    <StyledContainer {...props}>
        {props.children}
    </StyledContainer>
)

export {StyledContainer}
export default Container

import StyledTitle from './style'

interface Props {
    size?: string
    lg?: string
    xl?: string
    className?: string
    children: any
}

const Title = (props: Props): JSX.Element => (
    <StyledTitle {...props}>
        {props.children}
    </StyledTitle>
)

export {StyledTitle}
export default Title

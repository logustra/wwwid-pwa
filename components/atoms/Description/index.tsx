import StyledDescription from './style'

interface Props {
    size?: string
    md?: string
    lg?: string
    family?: string
    color?: string
    children: any
}

const Description = (props: Props): JSX.Element => (
    <StyledDescription {...props}>
        {props.children}
    </StyledDescription>
)

export {StyledDescription}
export default Description

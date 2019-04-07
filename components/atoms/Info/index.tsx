import StyledInfo from './style'

interface Props {
    size?: string
    md?: string
    children: any
}

const Info = (props: Props): JSX.Element => (
    <StyledInfo {...props}>
        {props.children}
    </StyledInfo>
)

export {StyledInfo}
export default Info

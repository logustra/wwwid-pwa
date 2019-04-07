import StyledCard from './style'

interface Props {
    type?: string
    boxShadow?: boolean
    children: any
}

const Card = (props: Props): JSX.Element => (
    <StyledCard {...props}>
        {props.children}
    </StyledCard>
)

export {StyledCard}
export default Card

import StyledCard from './style'

const Card = (props) => (
    <StyledCard {...props}>
        {props.children}
    </StyledCard>
)

export {StyledCard}
export default Card

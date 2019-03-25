import StyledList from './style'

const List = (props) => (
    <StyledList {...props}>
        {props.children}
    </StyledList>
)

export {StyledList}
export default List

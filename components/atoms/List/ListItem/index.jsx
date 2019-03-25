import StyledListItem from './style'

const ListItem = (props) => (
    <StyledListItem {...props}>
        {props.children}
    </StyledListItem>
)

export {StyledListItem}
export default ListItem

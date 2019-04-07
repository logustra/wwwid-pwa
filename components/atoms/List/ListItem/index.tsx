import StyledListItem from './style'

interface Props {
    display?: string
    children: any
}

const ListItem = (props: Props) => (
    <StyledListItem {...props}>
        {props.children}
    </StyledListItem>
)

export {StyledListItem}
export default ListItem

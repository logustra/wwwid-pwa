import StyledList from './style'

interface Props {
    display?: string
    justifyContent?: string
    alignItems?: string
    children: any
}

const List = (props: Props): JSX.Element => (
    <StyledList {...props}>
        {props.children}
    </StyledList>
)

export {StyledList}
export default List

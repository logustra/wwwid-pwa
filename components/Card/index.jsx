import Link from 'next/link'
import toExcept from '../../helper/Helper'

import {
    StyledCard,
    StyledCardThumbnail,
    StyledTitle,
    StyledDescriptions,
    StyledInfo
} from './style'

const Card = props => {
    return (
        <Link href={props.url}>
            <StyledCard>
                <StyledCardThumbnail src={props.thumbnail} alt={props.title} />
                <figcaption>
                    <StyledTitle>{props.title}</StyledTitle>
                    <StyledDescriptions>{toExcept(props.description, 200)}</StyledDescriptions>
                    <StyledInfo>
                        <span>{props.author}</span>
                        <span>{props.date}</span>
                    </StyledInfo>
                </figcaption>
            </StyledCard>
        </Link>
    )
}

export default Card

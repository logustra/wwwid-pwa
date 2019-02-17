import Link from 'next/link'
import {string} from 'prop-types'

import StyledCard,{
    StyledThumbnail,
    StyledTitle,
    StyledDescriptions,
    StyledInfo
} from './style'

export default function Card(props) {
    return (
        <Link href={props.slug}>
            <StyledCard>
                <StyledThumbnail src={props.thumbnail} alt={props.title} />
                <figcaption>
                    <StyledTitle>{props.title}</StyledTitle>
                    <StyledDescriptions>{props.excerpt}</StyledDescriptions>
                    <StyledInfo>
                        <span>{props.author}</span>
                        <span>{props.date}</span>
                    </StyledInfo>
                </figcaption>
            </StyledCard>
        </Link>
    )
}

Card.propTypes = {
    slug: string,
    thumbnail: string,
    title: string,
    description: string,
    author: string,
    date: string
}

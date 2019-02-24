import Link from 'next/link'
import {string} from 'prop-types'

import StyledCard,{
    StyledThumbnail,
    StyledTitle,
    StyledDescription,
    StyledInfo
} from './style'

export default function Card(props) {
    return (
        <Link
            as={`/article/${props.slug}`}
            href={
                {
                    pathname: '/detail',
                    query: {
                        title: props.title,
                        description: props.description
                    }
                }
            }>

            <StyledCard>
                <StyledThumbnail src={props.thumbnail} alt={props.title} />
                <figcaption>
                    <StyledTitle>{props.title}</StyledTitle>
                    <StyledDescription>{props.excerpt}</StyledDescription>
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

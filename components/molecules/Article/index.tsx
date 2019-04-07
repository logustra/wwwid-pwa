import Link from 'next/link'

import {Colors} from '../../_base';

import {
    Thumbnail,
    Title,
    Description,
    Info
} from '../../atoms'

import StyledArticle from './style'

interface Props {
    key: any
    slug: string
    thumbnail: string
    title: string
    excerpt: string
    description: string
    author: string
    date: string
    categories: string
}

export default function Article(props: Props): JSX.Element {
    return (
        <Link
            as={`/article/${props.slug}`}
            href={
                {
                    pathname: '/detail',
                    query: {
                        title: props.title,
                        thumbnail: props.thumbnail,
                        description: props.description,
                        categories: props.categories,
                    }
                }
            }>

            <StyledArticle
                type="rounded"
                boxShadow
            >
                <Thumbnail
                    src={props.thumbnail}
                    alt={props.title}
                    type="rounded-left"
                />

                <div>
                    <Title
                        size="lg"
                        lg="21"
                    >
                        {props.title}
                    </Title>

                    <Description color={Colors.mediumMidnight}>
                        {props.excerpt}
                    </Description>

                    <Info
                        size="md"
                        md="13"
                    >
                        <span>{props.author}</span>
                        <span>{props.date}</span>
                    </Info>
                </div>
            </StyledArticle>
        </Link>
    )
}

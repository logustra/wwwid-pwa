import React from 'react'
import ReactHtmlParser from 'react-html-parser'
import Link from 'next/link'
import {useRouter} from '../../store'

import {
    Colors,
    Container,
    ListInline,
    ListInlineItem
} from '../../styles'

import StyledDetail, {
    StyledTitle,
    StyledThumbnail,
    StyledDescription
} from './style'

import Layout from '../../components/Layout'

export default function Detail(props) {
    const router = useRouter()
    const data = router.query

    function renderCategories(categories) {
        console.log(categories)
        return (
            <ListInline background>
                {
                    JSON.parse(categories).map(category => {
                        return (
                            <ListInlineItem key={category.id}>
                                <Link
                                    as={`/category/${category.slug}`}
                                    href={
                                        {
                                            pathname: '/categories',
                                            query: {
                                                title: category.title,
                                            }
                                        }
                                    }>
                                    <a>{category.title}</a>
                                </Link>
                            </ListInlineItem>
                        )
                    })
                }
            </ListInline>
        )
    }

    return (
        <Layout>
            <StyledDetail>
                <StyledThumbnail src={data.thumbnail} alt={data.titls}/>
                <Container background={Colors.white}>
                    <StyledTitle>{data.title}</StyledTitle>
                    <StyledDescription>
                        {ReactHtmlParser(data.description)}
                        {renderCategories(data.categories)}
                    </StyledDescription>
                </Container>
            </StyledDetail>
        </Layout>
    )
}

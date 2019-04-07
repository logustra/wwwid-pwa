import React from 'react'
import ReactHtmlParser from 'react-html-parser'
import Link from 'next/link'
import {useRouter} from '../../store'

import {Fonts} from '../../components/_base'

import {
    Card,
    Thumbnail,
    Title,
    Description,
    List,
    ListItem
} from '../../components/atoms'
import {Layout, Container} from '../../components/templates'

import StyledDetail from '../Detail/style'

export default function Detail() {
    const router = useRouter()
    const data = router.query

    function renderCategories(categories: string) {
        return (
            <List>
                {
                    JSON.parse(categories).map((category: {[key: string]: string}) => {
                        return (
                            <ListItem
                                display="inline"
                                key={category.id}
                            >
                                <Link
                                    as={`/category/${category.slug}`}
                                    href={
                                        {
                                            pathname: '/categories',
                                            query: {
                                                title: category.title,
                                            }
                                        }
                                    }
                                >
                                    <a>{category.title}</a>
                                </Link>
                            </ListItem>
                        )
                    })
                }
            </List>
        )
    }

    return (
        <Layout>
            <StyledDetail>
                <Thumbnail
                    src={data.thumbnail}
                    alt={data.title}
                />

                <Container>
                    <Card type="rounded-top">
                        <Title
                            size="xl"
                            xl="38"
                            className="text-center"
                        >
                            {data.title}
                        </Title>

                        <Description
                            size="lg"
                            lg="21"
                            family={Fonts.family.georgia}
                        >
                            {ReactHtmlParser(data.description)}
                            {renderCategories(data.categories)}
                        </Description>
                    </Card>
                </Container>
            </StyledDetail>
        </Layout>
    )
}

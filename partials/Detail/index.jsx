import React from 'react'
import ReactHtmlParser from 'react-html-parser'
import {useRouter} from '../../store'

import {
    Colors,
    Container
} from '../../styles'

import StyledDetail, {
    StyledTitle,
    StyledDescription
} from './style'

import Layout from '../../components/Layout'

export default function Detail(props) {
    const router = useRouter()
    const data = router.query

    return (
        <Layout>
            <StyledDetail>
                <Container background={Colors.white}>
                    <StyledTitle>{data.title}</StyledTitle>
                    <StyledDescription>
                        {ReactHtmlParser(data.description)}
                    </StyledDescription>
                </Container>
            </StyledDetail>
        </Layout>
    )
}

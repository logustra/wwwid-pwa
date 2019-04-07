import React, {useEffect, useReducer} from "react"
import axios from '../../lib/Axios'

import {isLoading, receiveArticles} from '../../store/action'
import reducer, {initialState} from '../../store/reducer'

import {Layout, Container} from '../../components/templates'
import {Article} from '../../components/molecules'

export default function Home() {
    const [state, dispatch] = useReducer(reducer, initialState)

    async function getArticles() {
        await axios.get('/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2Fwwwid')
            .then((response) => {
                receiveArticles(dispatch, response.data.items)
                isLoading(dispatch, false)
            })
    }

    useEffect(() => {
        getArticles()
    }, [])

    function renderArticles(data: {[key: string]: string}[]) {
        console.log(data)
        console.log(state.loading)
        return data.map(item => (
            <Article
                key={item.id}
                slug={item.slug}
                thumbnail={item.thumbnail}
                title={item.title}
                excerpt={item.excerpt}
                description={item.description}
                author={item.author}
                date={item.date}
                categories={JSON.stringify(item.categories)}
            />
        ))
    }

    return (
        <Layout>
            <Container>
                {state.loading ? 'loading...' : renderArticles(state.articles)}
            </Container>
        </Layout>
    )
}

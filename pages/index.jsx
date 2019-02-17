import React, {
    useEffect,
    useReducer
} from "react"
import axios from '../lib/Axios'

import {retrieveArticles, isLoading} from '../store/action'
import reducer, {initialState} from '../store/reducer'

import Layout from '../components/Layout'
import Card from '../components/Card'

export default function Home() {
    const [{articles, loading}, dispatch] = useReducer(reducer, initialState)

    async function getArticles() {
        await axios.get('/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2Fwwwid')
            .then((response) => {
                retrieveArticles(dispatch, response.data.items)
                isLoading(dispatch, false)
            })
    }

    useEffect(() => {
        getArticles()
    }, [])

    function renderArticles(data) {
        return data.map(item => (
            <Card
                key={item.id}
                slug={item.slug}
                thumbnail={item.thumbnail}
                title={item.title}
                excerpt={item.excerpt}
                author={item.author}
                date={item.data}
            />
        ))
    }

    return (
        <Layout>
            {loading ? 'loading...' : renderArticles(articles)}
        </Layout>
    )
}

import React, {
    useEffect,
    useReducer
} from "react"
import axios from '../lib/Axios'

import {isLoading, receiveFeeds} from '../store/action'
import reducer, {initialState} from '../store/reducer'

import Layout from '../components/Layout'
import Card from '../components/Card'

export default function Home() {
    const [{feeds, loading}, dispatch] = useReducer(reducer, initialState)

    async function getFeeds() {
        await axios.get('/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2Fwwwid')
            .then((response) => {
                receiveFeeds(dispatch, response.data.items)
                isLoading(dispatch, false)
            })
    }

    useEffect(() => {
        getFeeds()
    }, [])

    function renderFeeds(data) {
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
            {loading ? 'loading...' : renderFeeds(feeds)}
        </Layout>
    )
}

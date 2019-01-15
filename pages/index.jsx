import React, { Component } from "react"
import axios from '../lib/Axios'

import Layout from '../components/layout/Layout'
import Card from '../components/card/Card'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            articles: null
        }
    }

    async componentDidMount() {
        await axios.get('/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2Fwwwid')
                .then((response) => {
                    this.setState({
                        articles: response.data.items
                    })
                })
    }

    render() {
        let articles

        articles = 'loading...'

        if (this.state.articles) {
            articles = this.state.articles.map((article) => {
                return (
                    <Card
                        key={article.title}
                        thumbnail={article.thumbnail}
                        title={article.title}
                        description={article.description}
                        author={article.author}
                        date={article.pubDate}
                    />
                )
            })
        }

        return (
            <Layout>
                {articles}
            </Layout>
        )
    }
}

export default Home;

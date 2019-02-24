import {
    getId,
    convertToSlug,
    convertToTitle,
    convertToExcerpt
} from '../../helper'

export const initialState = {
    articles: [],
    loading: true
}

export default function reducer(state, action) {
    switch (action.type) {
        case 'RECEIVE_ARTICLES':
            return {
                ...state,
                articles: action.articles.map(article => ({
                    id: getId(article.guid),
                    slug: convertToSlug(article.title),
                    title: article.title,
                    date: new Date(article.pubDate).toLocaleDateString(),
                    author: article.author,
                    thumbnail: article.thumbnail,
                    categories: article.categories.map((category, index) => ({
                        id: index,
                        slug: category,
                        title: convertToTitle(category)
                    })),
                    excerpt: convertToExcerpt(article.description, 250),
                    description: article.description
                }))
            }

        case 'IS_LOADING':
            return {
                ...state,
                loading: false
            }
        default:
            return state
    }
}

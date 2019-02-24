import {
    getId,
    convertToSlug,
    convertToExcerpt
} from '../../helper'

export const initialState = {
    feeds: [],
    loading: true
}

export default function reducer(state, action) {
    switch (action.type) {
        case 'RECEIVE_FEEDS':
            return {
                ...state,
                feeds: action.feeds.map(feed => ({
                    id: getId(feed.guid),
                    slug: convertToSlug(feed.title),
                    title: feed.title,
                    date: feed.pubDate,
                    author: feed.author,
                    thumbnail: feed.thumbnail,
                    categories: feed.categories,
                    excerpt: convertToExcerpt(feed.description, 250),
                    description: feed.description
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

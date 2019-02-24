export function isLoading(dispatch, loading) {
    dispatch({
        type: 'IS_LOADING',
        loading
    });
}

export function receiveArticles(dispatch, articles) {
    dispatch({
        type: 'RECEIVE_ARTICLES',
        articles
    });
}

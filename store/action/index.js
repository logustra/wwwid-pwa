export function isLoading(dispatch, loading) {
    dispatch({
        type: 'IS_LOADING',
        loading
    });
}

export function retrieveArticles(dispatch, articles) {
    dispatch({
        type: 'RETRIEVE_ARTICLES',
        articles
    });
}

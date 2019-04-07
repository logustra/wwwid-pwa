export function isLoading(dispatch: any, loading: boolean) {
    dispatch({
        type: 'IS_LOADING',
        loading
    });
}

export function receiveArticles(dispatch: any, articles: any) {
    dispatch({
        type: 'RECEIVE_ARTICLES',
        articles
    });
}

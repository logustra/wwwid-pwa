export function isLoading(dispatch, loading) {
    dispatch({
        type: 'IS_LOADING',
        loading
    });
}

export function receiveFeeds(dispatch, feeds) {
    dispatch({
        type: 'RECEIVE_FEEDS',
        feeds
    });
}

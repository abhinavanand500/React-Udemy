import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts =async () => {
    await jsonPlaceholder.get
    return {
        type: 'FETCH_POSTS',
    }
}
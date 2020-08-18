import { combineReducers } from 'redux';
import usersReducers from './usersReducers'
import postsReducer from './postsReducer';
export default combineReducers({
    posts: postsReducer,
    users: usersReducers,
});
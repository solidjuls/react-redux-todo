import { combineReducers } from 'redux';
import todos from './todos';
import { posts } from './posts';
import { postsBySubreddit } from './postsBySubreddit';
import { selectedSubreddit } from './selectedSubreddit';
import visibilityFilter from './visibilityFilter';

const todoApp = combineReducers({
    todos,
    posts,
    postsBySubreddit,
    selectedSubreddit,
    visibilityFilter
});

export default todoApp;
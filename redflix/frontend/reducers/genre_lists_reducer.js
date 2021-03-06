import {
    RECEIVE_MOVIES,
    ADD_TO_WATCHLIST,
    REMOVE_MOVIE,
} from '../actions/movies_actions';
import {merge} from 'lodash';
import {deleteItem} from '../util/delete_array_item';

const genreListsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState;
    switch (action.type) {
        case RECEIVE_MOVIES:
          newState = merge({},action.payload.genreLists)
          return newState;
        case ADD_TO_WATCHLIST:
          newState = merge({}, oldState);
            if (!newState[0]) {
              newState[0] = [];
            }
          newState[0].push(action.movie.id);
          return newState;
        case REMOVE_MOVIE:
          newState = merge({}, oldState);
          newState[0] = deleteItem(newState[0], action.movieId);
        return newState;
        default:
          return oldState;
    }
}

export default genreListsReducer;
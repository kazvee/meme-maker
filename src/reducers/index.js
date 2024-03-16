import { combineReducers } from 'redux';
import { NEW_MEME, RECEIVE_MEMES } from '../actions';

function memes(state = [], action) {
  switch (action.type) {
    case RECEIVE_MEMES:
      return action.memes;
    default:
      return state;
  }
}

function myMemes(state = [], action) {
  switch (action.type) {
    case NEW_MEME:
      return [...state, action.meme];
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  memes,
  myMemes,
});

export default rootReducer;

import { combineReducers } from 'redux';
import { REQUEST_DATA, RECEIVE_DATA, SELECTED_PATH } from '../actions';

const selectedPath = (state = 'paths', action) => {
   switch (action.type) {
      case SELECTED_PATH:
         return action.path;
      default:
         return state;
   }
};
export const appData = (
   state = {
      isFetching: false
   },
   action
) => {
   switch (action.type) {
      case REQUEST_DATA:
         return {
            ...state,
            isFetching: true
         };
      case RECEIVE_DATA:
         return {
           ...state,
            isFetching: false,
            lastUpdated: action.receivedAt,
            data: action.data
         };
      default:
         return state;
   }
};

const appState = (state = {}, action) => {

  switch (action.type) {
      case RECEIVE_DATA:
      case REQUEST_DATA:
         return {
            ...state,
            [action.path]: appData(state[action.path], action)
         };
      default:
         return state;
   }
};

const rootReducer = combineReducers({
   appState,
   selectedPath
});

export default rootReducer;

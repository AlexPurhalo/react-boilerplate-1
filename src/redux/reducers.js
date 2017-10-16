import { combineReducers } from 'redux';

//include ducks reducers
import main from './ducks/main';
/**
 * Creates the main reducer with the asynchronously loaded ones
 */
export default function createReducer() {
	return combineReducers({
      main,
	})
}
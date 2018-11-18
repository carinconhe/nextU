import { combineReducers } from 'redux';
import frutasReducer from './frutasReducer';

export default combineReducers({
    frutas: frutasReducer
});
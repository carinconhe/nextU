import { combineReducers } from 'redux';
import frutasReducer from './frutasReducer';
import seleccionadaReducer from './seleccionadaReducer';

export default combineReducers({
    frutas: frutasReducer,
    idFrutaSeleccionada : seleccionadaReducer
});

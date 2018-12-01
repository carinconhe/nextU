import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Encabezado } from './components/lib';
import ListaFrutas from './components/ListaFrutas';

const App = () => {
    return (
        <Provider store={createStore(reducers)}>
            <View style={{flex:1}}>
                <Encabezado tituloEncabezado={'Frutas'} />
                <ListaFrutas />
            </View>
        </Provider>
    );
};

export default App;

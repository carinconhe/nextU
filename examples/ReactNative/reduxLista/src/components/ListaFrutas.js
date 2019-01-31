import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import ItemLista from './ItemLista';

class ListaFrutas extends Component {

    componentWillMount(){
        const ds = new ListView.DataSource({
            rowHasChanged : (r1,r2) => r1 !== r2
        });
        this.DataSource = ds.cloneWithRows(this.props.frutas);
    }

    mostrarFila(fruta){
        return <ItemLista frutaInfo={fruta} />;
    }

    render() {
        
        return (
            <ListView
                dataSource = {this.DataSource}
                renderRow = {this.mostrarFila}
            />    
        );
    }
}

const mapStateToProps = state => {
    return { frutas: state.frutas };
};

export default connect(mapStateToProps)(ListaFrutas);

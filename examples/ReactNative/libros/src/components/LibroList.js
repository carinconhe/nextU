import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import request from 'superagent';
import Libro from './Libro';

class LibroList extends Component {
    state = { libros: [] }

    componentWillMount() {
        request
            .get('https://www.googleapis.com/books/v1/volumes')
            .query({
                q: 'stranger+inauthor:williams',
                key: 'AIzaSyA9sHKE1eUvcaR-JygZ37TziasYFkfwpAY'
            })
            .end((err, res) => {
                this.setState({ libros: res.body.items });
            });
    }

    mostrarLibros() {
        return this.state.libros.map(libro => 
            <Libro key={libro.id} libroData={libro} />
        );
    }

    render() {
        return (
            <ScrollView>
                { this.mostrarLibros() }
            </ScrollView>
        );
    }
}

export default LibroList;


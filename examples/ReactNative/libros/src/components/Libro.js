import React from 'react';
import { Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Boton from './Boton';

const Libro = (props) => {
    const { tituloStyle, autorStyle } = styles;
    return (
        <Card>
            <CardSection>
                <Text style={tituloStyle}>{props.libroData.volumeInfo.title}</Text>
                <Text style={autorStyle}>{props.libroData.volumeInfo.authors[0]}</Text>
            </CardSection>
            <CardSection>
                <Boton texto={'Ver más'} />
            </CardSection>
        </Card>
    );
};

const styles = {
    tituloStyle: {
        fontSize: 18,
        flex: 1,
        alignSelf: 'center'
    },
    autorStyle: {
        fontSize: 14,
        flex: 1,
        alignSelf: 'center',
        color: '#b1b1b1'
    }
};

export default Libro;

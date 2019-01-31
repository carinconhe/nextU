import React from 'react';
import { View, Text, Image } from 'react-native';
import { Card, CardSection, Boton } from './lib';

const Perfil = () => {
    const { textStyle, imgStyle } = styles;
    return (
        <View>
            <Text style={textStyle}>Mi Perfil</Text>
            <Card>
                <CardSection>
                    <Image
                        style={imgStyle}
                        source={{ uri: 'https://thebenclark.files.wordpress.com/2014/03/facebook-default-no-profile-pic.jpg' }}
                    />
                </CardSection>
                <CardSection>
                    <Boton texto={'Editar'} />
                </CardSection>
            </Card>
        </View>
    );
};

const styles = {
    textStyle: {
        fontSize: 20,
        alignSelf: 'center',
        marginBottom: 10,
    },
    imgStyle: {
        height: 400,
        flex: 1,
        width: null
    }
};

export default Perfil;

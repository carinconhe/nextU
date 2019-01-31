import React from 'react';
import { Text, View, TextInput } from 'react-native';

const Input = ({ texto, value, onChangeText, placeholder, secureTextEntry }) => {
    const { viewStyle, etiquetaStyle, inputStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={etiquetaStyle}>{texto}</Text>
            <TextInput
                placeholder={placeholder}
                style={inputStyle}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
            />
        </View>
    );
};

const styles = {
    viewStyle: {
        flex: 1,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center'
    },
    etiquetaStyle: {
        fontSize: 19,
        paddingLeft: 15,
        flex: 1
    },
    inputStyle: {
        color: '#000',
        width: 100,
        height: 40,
        paddingLeft: 5,
        paddingRight: 5,
        fontSize: 19,
        lineHeight: 24,
        flex: 2
    }
};

export { Input };

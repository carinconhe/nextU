import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
    const { viewStyle } = styles;
    return (
        <View style={viewStyle}>
            {props.children}
        </View>
    );
};

const styles = {
    viewStyle: {
        marginLeft: 5,
        marginRight: 5,
        marginTop:5,
        marginBottom:5,
    }
};

export { Card };

import React from 'react';
import { View } from 'react-native';

const CardList = (props) => {
    const { viewStyle } = styles;
    return (
        <View style={viewStyle}>
            {props.children}
        </View>
    );
};

const styles = {
    viewStyle: {
        flex: 1,
        height: 200,
        marginLeft: 20,
        marginRight:20,
        marginTop:20,
        marginBottom:20
    }
};

export { CardList };

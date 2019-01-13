import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
    const { viewStyles } = styles;
    return (
        <View style={viewStyles}>
            {props.children}
        </View>
    );
};

const styles = {
    viewStyles: {
        flexDirection: 'row',
        marginTop:20,
    }
};

export { CardSection };



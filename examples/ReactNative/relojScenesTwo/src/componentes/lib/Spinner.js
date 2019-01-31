import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = ({ size }) => {
    return (
        <View style={styles.viewStyles}>
            <ActivityIndicator size={size} />
        </View>
    );
};

const styles = {
    viewStyles: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
};

export { Spinner };

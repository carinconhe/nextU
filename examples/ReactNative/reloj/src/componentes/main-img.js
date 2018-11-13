import React from 'react';
import { Image, View } from 'react-native';

const MainImg = () => {
    return (
        <View style={styles.viewStyles}>
            <Image 
                style={styles.imageStyles}
                source={{ uri: 'https://cdn.pixabay.com/photo/2015/11/07/11/21/city-1031046_640.jpg' }} 
            />
            <Image
                style={styles.imageStyles}
                source={require('../images/Bogota.jpg')}
            />
        </View>
    );
};

const styles = {
    imageStyles: {
        height: 300,
        flex: 1,
        display :'flex',
        flexDirection: 'column',
        width: null,
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    viewStyles: {
        flexGrow: 1
    }
};

export default MainImg;

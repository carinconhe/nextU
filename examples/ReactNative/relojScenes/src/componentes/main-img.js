import React from 'react';
import { Image } from 'react-native';

const MainImg = () => {
    return (
        <Image 
            style={styles.imageStyles}
            source={{ uri: 'https://cdn.pixabay.com/photo/2015/11/07/11/21/city-1031046_640.jpg' }} 
        />
    );
};

const styles = {
    imageStyles: {
        height: 200,
        flex: 1,
        width: null
    }
};

export default MainImg;

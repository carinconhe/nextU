import React from 'react';
import { View, Text } from 'react-native';
import { CardSection } from './lib';

const ListaCiudades = () => {
    return (
        <View>
            <CardSection>
                <Text>New York</Text>
            </CardSection>
            <CardSection>
                <Text>Rio de Janeiro</Text>
            </CardSection>
            <CardSection>
                <Text>Londres</Text>
            </CardSection>
            <CardSection>
                <Text>Tokio</Text>
            </CardSection>
            <CardSection>
                <Text>Sídney</Text>
            </CardSection>
        </View>
    );
};

export default ListaCiudades;

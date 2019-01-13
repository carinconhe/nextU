import React, {Component} from 'react';
import {View,Text,Image,TouchableOpacity} from 'react-native';
import { Actions } from 'react-native-router-flux';
import {NavBotton,CardList,CardSection} from './lib';

class Home extends Component{
    
    render(){
        const { mainContenedor,list,item,imgStyle,contentTitle}=styles;
        return(
            <View style={mainContenedor}>
                <View style={list}>
                    <CardList style={item}>
                        <TouchableOpacity onPress={() => Actions.Football()}>
                            <CardSection>
                                <Image
                                    style={imgStyle}
                                    source={{ uri: 'https://prendedores.co/la_deportiva/futbol.jpg' }}
                                />
                            </CardSection>
                            <View style={contentTitle}>
                                <Text>Fútbol</Text>
                            </View>
                        </TouchableOpacity>
                    </CardList>
                    
                    <CardList style={item}>
                        <TouchableOpacity onPress={() => Actions.Basketball()}>
                        <CardSection>
                            <Image
                                style={imgStyle}
                                source={{ uri: 'https://prendedores.co/la_deportiva/baloncesto.png' }}
                            />
                        </CardSection>
                        <View style={contentTitle}>
                            <Text>Baloncesto</Text>
                        </View>
                        </TouchableOpacity>
                    </CardList>
                </View>
                <View style={list}> 
                    <CardList style={item}>
                        <TouchableOpacity onPress={() => Actions.Betting()}>
                            <CardSection>
                                <Image
                                    style={imgStyle}
                                    source={{ uri: 'https://prendedores.co/la_deportiva/betting.jpg' }}
                                />
                            </CardSection>
                            <View style={contentTitle}>
                                <Text>Apuesta</Text>
                            </View>
                        </TouchableOpacity>
                    </CardList>
                    
                    <CardList style={item}>
                        <CardSection>
                            <Image
                                style={imgStyle}
                                source={{ uri: 'https://prendedores.co/la_deportiva/login.jpg' }}
                            />
                        </CardSection>
                        <View style={contentTitle}>
                            <Text>Perfil</Text>
                        </View>
                    </CardList>
                </View>
                <NavBotton
                    primero="ios-home" 
                    segundo="ios-football"
                    tercero="ios-basketball" 
                    cuarto="ios-cash" 
                />
            </View>
            
        );
    }
}
const styles = {
    mainContenedor:{
        paddingTop: 20,
        height: 600,
        minHeight: 500,
    },
    list: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    imgStyle: {
        height: 190,
        flex: 1,
        resizeMode: 'contain'
    },
    contentTitle :{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    }
}

export default Home;
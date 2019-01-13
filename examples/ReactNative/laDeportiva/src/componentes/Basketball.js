import React, {Component} from 'react';
import {View,ScrollView} from 'react-native';
import {NavBotton} from './lib';
import Itemlist from './lib/ItemList';
import firebase from 'firebase';

class Basketball extends Component{
    state = {data:[],fbQuery:null}

    componentWillMount(){
        let sports = Object;
        sports  = firebase.database().ref('sports/').orderByChild("type_sport").equalTo(2);    
        this.setState({fbQuery: sports});
    }

    componentDidMount(){
        let sports = this.state.fbQuery;
        sports.on('value', (snapshot) => {
            let data = snapshot.val();
            if(data!=null){
                let items = Object.values(data);
                this.setState({data:items});
            }
         });
    }

    showData(){
        
        return this.state.data.map((item,index) =>
            (item.status==2)?    
                <Itemlist
                    key         = {index}
                    country     = {item.country}
                    team_home   = {item.team_home}
                    team_away   = {item.team_away}
                    score_home  = {item.score_home}
                    score_away  = {item.score_away}
                    type        = {item.status}
                />
                :null    
        );
    }

    render(){
        const { mainContenedor } = styles;
        return (
            <View style={mainContenedor}>
                <ScrollView >
                    {this.showData()}
                </ScrollView>
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
    mainContenedor :{
        marginTop:20,
        height: 580,
        minHeight: 500
    }
};

export default Basketball;
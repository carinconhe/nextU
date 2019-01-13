import React, {Component} from 'react';
import {View,ScrollView} from 'react-native';
import {NavBotton} from './lib';
import Itemlist from './lib/ItemList';
import firebase from 'firebase';

class Betting extends Component{
    state = {
        data:[],
        keys :[],
        fbQuery:null
    }

    componentWillMount(){
        let sports = Object;
        sports  = firebase.database().ref('sports/').orderByChild("status").equalTo(0);
        this.setState({fbQuery: sports});
    }

    componentDidMount(){
        let sports = this.state.fbQuery;
        sports.on('value', (snapshot) => {
            let data = snapshot.val();
            let keys  = Object.keys(data);
            let items = Object.values(data);
            this.setState({data:items,keys:keys});
         });
    }

    showData(){
        
        return this.state.data.map((item,index) =>
            <Itemlist
                key         = {index}
                id          = {this.state.keys[index]}
                team_home   = {item.team_home}
                team_away   = {item.team_away}
                score_home  = {item.score_home}
                score_away  = {item.score_away}
                type        = {item.status}
            />
        );
    }

    toggleAction(){

    }

    render(){
        return (
            <View style={style.contentStyle}>
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

const style = {
    contentStyle :{
        marginTop:20,
        height: 580,
        minHeight: 500
    }
};

export default Betting;
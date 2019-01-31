import React, {Component} from 'react';
import {View,ScrollView} from 'react-native';
import {NavBotton} from './lib';
import Itemlist from './lib/ItemList';
import firebase from 'firebase';

class Football extends Component{
    state = {data:[],fbQuery:null}

    componentWillMount(){
        let sports = Object;
        sports  = firebase.database().ref('sports/').orderByChild("type_sport").equalTo(1);
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
        return this.state.data
        .map((item,index) =>
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
        return(
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
        paddingTop: 20,
        height: 600,
        minHeight: 500
    }
};

export default Football;
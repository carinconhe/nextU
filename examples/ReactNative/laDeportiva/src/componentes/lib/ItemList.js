import React, {Component} from 'react';
import {Text,View,TouchableOpacity,TextInput} from 'react-native';
import {Boton} from './Boton';
import firebase from 'firebase';

class ItemList extends Component{
    state = {
        status:'none',
        id : null,
        score_home : null,
        score_away : null,
        user_email : null,
        isVisibleButton : true,
        id_betting : null,
        bettings : null,
        fbQuery : null
    }
    
    constructor(props) {
        super(props);
    }

    componentWillMount(){
        this.setState({id:this.props.id});
        this.isKey();
    }

    toggleStatus(){
        if(this.props.type==0){
            if(this.state.status=='flex'){
                this.setState({status:'none'})
            }else{
                this.setState({status:'flex'})
            }
        }
    }

    showAction(){
        if(this.state.isVisibleButton==true){
            return (<Boton 
                        texto={'Apostar'}
                        onPress={this.sendForm.bind(this)}
                    />);
        }else{
            return (
                <Text>Enviado</Text>
            );
        }
    }


    isKey(){
        let isKey, user_email = null,bettings=null,id=this.state.id,keys=null;

        if (firebase.auth().currentUser !== null)
            user_email =firebase.auth().currentUser.email;
        else
            user_email = 'new User';

        let betting = firebase.database().ref('betting').orderByChild("user_email").equalTo(user_email);
        this.setState({user_email:user_email});

        let fbQuery = betting;
        if(fbQuery!=null){
            fbQuery.on('value', (snapshot) => {
                let data = snapshot.val();
                if(data!=null){
                    const key = Object.keys(data);
                    let items = Object.values(data);
                    bettings = items;
                    keys =key;
                }
             });
        }

        if(bettings){
            isKey  = bettings.map(function(obj,index){
                if(obj.id_sports==id){
                    return {key:keys[index],value:true}
                }
            });
            isKey = isKey.filter(function (el) {
                return el != null;
            });
        }
        if(Array.isArray(isKey))
            isKey=isKey[0];

        if(isKey==undefined)
            isKey={key:null,value:false}
            
        return isKey;
    }

    sendForm(){
        let ref = 'betting',isKey=this.isKey();
        const {id,score_away,score_home,user_email} = this.state;
        console.log('score_away',score_away,'score_home',score_home,isKey,user_email);
        
        if(isKey.key!=null && isKey.value===true){
            ref += '/'+isKey.key;
        }
        //console.log('values',isKey.key,ref);
        
        if(score_away!=null && score_home!=null ){
            let result = true;
            
            if(isKey.value===true){
                firebase.database().ref(ref).set({
                    score_away: score_away,
                    score_home: score_home,
                    id_sports : id,
                    user_email : user_email
                }, function(error) {
                    if (error) {
                        // The write failed...
                        console.log(error);
                    } else {
                        result = true;
                    }
                });
            }else{
                firebase.database().ref(ref).push().set({
                    score_away: score_away,
                    score_home: score_home,
                    id_sports : id,
                    user_email : user_email
                }, function(error) {
                    if (error) {
                        // The write failed...
                        console.log(error);
                    } else {
                        result = true;
                    }
                });
            }
            
            if(result===true)
                this.setState({isVisibleButton:false,score_away:null,score_home:null});                
        }
        
    }

    render(){
        const {mainContainer,tituloStyle,inputStyle,contentBetting,contentbutton} =styles;
        return(
            <View style={mainContainer}>
                <Text>{this.props.country}</Text>
                    <TouchableOpacity onPress={() => this.toggleStatus()}>
                        <View style={tituloStyle}>
                            <Text>{this.props.team_home}</Text>
                            <Text>{this.props.score_home} - {this.props.score_away}</Text>
                            <Text>{this.props.team_away}</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{display: this.state.status}}>
                        <Text>Introduce el marcador final del partido</Text>
                        <View style={contentBetting}>
                            <TextInput
                                style={inputStyle}
                                onChangeText={(score_home) => this.setState({score_home})}
                            />
                            <TextInput
                                style={inputStyle}
                                onChangeText={(score_away) => this.setState({score_away})}
                            />
                        </View>
                        <View style={contentbutton}>
                            {this.showAction()}
                        </View>
                    </View>
            </View>
        );
    }
}

const styles ={
    mainContainer :{
        marginBottom:10
    },
    tituloStyle :{
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        padding: 5
    },
    nombreStyle: {
        flex: 2
    },
    itemStyle :{
        textAlign:'center',
        flex:1
    },
    inputStyle :{
        height : 20,
        borderColor: 'gray', 
        borderWidth: 1,
        fontSize:11,
        width:60
    },
    contentBetting : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20
    },
    contentbutton :{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    }
}

export default ItemList;
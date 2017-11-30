import React, {Component} from 'react';
import {View,Text} from 'react-native';
import firebase from 'firebase';
import {Header, Button,CardSection,Spinner} from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component{

	state = {loggedIn:null};
	componentWillMount(){
		firebase.initializeApp({
			apiKey: "AIzaSyBlJWkbJR8YVCYBN9o-TVtmgw2MVLE3OMA",
		    authDomain: "authentication-e570c.firebaseapp.com",
		    databaseURL: "https://authentication-e570c.firebaseio.com",
		    projectId: "authentication-e570c",
		    storageBucket: "",
		    messagingSenderId: "759211360705"
		});

		firebase.auth().onAuthStateChanged((user)=>{
			
			if(user){
				this.setState({loggedIn:true})
			}else{
				this.setState({loggedIn:false})
			}
		});
	}


	renderContent(){
		//alert(this.state.loggedIn)
		switch(this.state.loggedIn){
			case true:
			return(
				<CardSection>
				<Button onPress={()=>firebase.auth().signOut()}>
				Log Out
				</Button>
				</CardSection>
				);
			case false:
			return <LoginForm />;
			default:
			return (<CardSection><Spinner size="large" /></CardSection>)
		}
		
	}
	render(){
		return(
			<View>
			<Header headerText="Authentication"/>
			{this.renderContent()}
			</View>
			)
	}
}

export default App;
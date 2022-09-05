import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, TextInput, TouchableOpacity  } from "react-native";

class App extends Component {
render() {
	return (
	<View >
		<Person name="James" eyeColor="brown" age="31"></Person>
		<Person name="Sally" eyeColor="brown" ></Person>
		<Person name="Rachel" age="27"></Person>
		<Person eyeColor="brown" age="19"></Person>
	</View>
	);
}
}

class Person extends Component {
render() {
	return (
	<View>
		<View><Text>Name: {this.props.name}</Text></View>
		<View><Text>EyeColor: {this.props.eyeColor}</Text></View>
		<View><Text>Age : {this.props.age} </Text></View>
    <View><Text></Text></View>
	</View>
	) 
} 
}

Person.defaultProps = {
  name: "Johh. Doe",
  eyeColor: "Black",
  age: "37"
}

export default App;

import React, { useState } from "react";
import { Text, View, TextInput, Button } from "react-native";
import {
Item,
HeaderButton,
HeaderButtons,
} from "react-navigation-header-buttons";

const HomeScreen = ({ navigation }) => {
	var nav = navigation;
	return (
		<View style={{alignItems: "center",
						justifyContent: "center", flex: 1}}>
			<Text style={{margin: 10}}>This is a multi screen example</Text>
			<Button
				title="Create a new blog post" 
				onPress={() =>
				navigation.navigate('NewPost', { name: 'V2' })
				}
			/>
			<Text style={{margin: 1}}></Text>
			<Button
				title="Show all posts" 
				onPress={() =>
				navigation.navigate('ViewPosts', { name: 'V2' })
				}
			/>
	  	</View>
	);
  };
 
export default HomeScreen;

import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Button, TextInput, TouchableOpacity  } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { AsyncStorage } from 'react-native';

const NewPost = ({ navigation, route }) => {
	const [text, onChangeText] = React.useState("");
	const saveArticle = async (key, value) =>{
		try {
		  await AsyncStorage.setItem(key, value);
		  alert ("Save succesfully");
		  navigation.navigate('ViewPosts', { name: 'V2' })
		} catch (e) {
		  console.log(e);
		}
	  };
	const submitPost = () => ( saveArticle (value, text) );
	let data2 = [{value: "Weather",},{value: "Agriculture",},{value: "School",}];
	const [value, setValue] = React.useState(null);
    const [isFocus, setIsFocus] = React.useState(false);

	return (
	<SafeAreaView style={styles.container}>
		<View><Text style={styles.title}>Please enter the details of your post. Then click on Save </Text></View>
		<Text style={styles.fieldcaption}>Category: </Text>
		<Dropdown
			label="my dropdown" labelField="value" valueField="value" placeholder="Category" value={value}
			data={data2} onFocus={() => setIsFocus(true)} onBlur={() => setIsFocus(false)}
			onChange={item => { setValue(item.value); setIsFocus(false); }}
		/>
		<Text style={styles.fieldcaption}>Story: </Text>
		<TextInput style={styles.input} onChangeText={onChangeText} value={text} placeholder="Your story" keyboardType="text" />
		<TouchableOpacity
			style={styles.button} title="" onPress={submitPost}
      	><Text>Submit Post</Text></TouchableOpacity>
	</SafeAreaView>
	);
  };
  
const styles = StyleSheet.create({
	container: { flex: 1, justifyContent: 'center', marginHorizontal: 16, },
	input: { height: 40, margin: 12, borderWidth: 1, padding: 10, },
	title: { fontSize: 30, marginBottom: 20, },
	button: {  alignItems: "center", backgroundColor: "#DDDDDD", padding: 10 },	
	fieldcaption: { marginTop: 20, fontSize: 20, fontWeight: "bold" }
})
export default NewPost;

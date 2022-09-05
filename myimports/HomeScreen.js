import React, { useState } from "react";
import { Text, View, TextInput, Button } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import {
Item,
HeaderButton,
HeaderButtons,
} from "react-navigation-header-buttons";

const Home = (props) => {
const [input, setInput] = useState("");
return (
	<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
	<Text style={{ color: "#006600", fontSize: 40 }}>Home Screen!</Text>
	<MaterialIcons name="menu" size={80} color="#006600" />
	<TextInput
		placeholder="Enter your name"
		value={input}
		onChangeText={(value) => setInput(value)}
	/>
	<Button
		title="Go to User Screen"
		color="#006600"
		onPress={() => props.navigation.navigate("NewPost", { username: input })}
	/>
	</View>
);
};

const HeaderButtonComponent = (props) => (
<View
	// IconComponent={Ionicons}
	iconSize={23}
	color="#FFF"
	{...props}
/>
);

Home.navigationOptions = (navData) => {
return {
	headerTitle: "Home",
	headerRight: () => (
	// <View HeaderButtonComponent={HeaderButtonComponent}>
	// 	<Item
	// 	title="Setting"
	// 	iconName="ios-settings-outline"
	// 	onPress={() => navData.navigation.navigate("Setting")}
	// 	/>
	// </View>


    <HeaderButtons HeaderButtonComponent={HeaderButtonComponent}>
		<Item
		title="Setting"
		iconName="ios-settings-outline"
		onPress={() => navData.navigation.navigate("User")}
		/>
	</HeaderButtons>
	),
};
};

export default Home;

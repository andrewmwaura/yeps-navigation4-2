import React from "react";
import { Button, Text, View, FlatList, StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AsyncStorage } from 'react-native';

import HomeScreen from "./screens/HomeScreen";
import NewPost from "./screens/CreatePost";
import ViewPosts from "./screens/ViewPosts";
import EditPost from "./screens/EditPost";

const Stack = createNativeStackNavigator();

const MyStack = () => {


  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ 
              title: '  Welcome.',
              headerLeft: () => (              
                <Button
                  onPress={() => alert ("OnClick")}
                  title="+" color="#333"
                />
              ),
            }}
          />
          <Stack.Screen 
            name="NewPost" component={NewPost} 
            options={{ 
              title: 'Create New Post',
              headerRight: () => (              
                <Button
                  onPress={() => alert('This is a button!')}
                  title="Info" color="#333"
                />
              ),
            }}
          />
          <Stack.Screen 
            name="ViewPosts" component={ViewPosts} 
            options={{ 
              title: 'All Posts',
            }}
          />
          <Stack.Screen 
            name="EditPost" component={EditPost} 
            options={{ 
              title: 'Edit Posts',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
   );
};

// function Main() {
//   const myData = React.useContext(MyContext);
//  if (!myData) {
//    return (<View><Text>Loading...</Text></View>);
//  }
//  // return (
//  //   <View><Text>{myData}</Text></View>
//  // );
//  return (
//    <View>
//      <FlatList
//        data={myData} 
//        renderItem={({ item }) => (
//        <View>
//                <View style={styles.dataview}>
//                    <Text style={styles.title}>{item [0]}</Text>
//                    <Text style={styles.story}>{item [1]}</Text>
//                </View>
//        </View>
//          )}
//        />
                 
//    </View>
//  );
// }
export default MyStack;

const styles = StyleSheet.create({
	container: { flex: 1, justifyContent: 'center', marginHorizontal: 16, },
	title: { fontSize: 30, marginTop: 10, },
	story: { marginBottom: 5, },
	onepost: {borderBottomColor: "blue", border: 1, flexDirection: "row"},	
	fieldcaption: { fontSize: 20, fontWeight: "bold" },
    separator: {border: 1, borderColor: "black", backgroundColor: "blue", height: 1},
    dataview: {flex: 5},
    buttonview: {flex:1, alignSelf: "center"} 
})

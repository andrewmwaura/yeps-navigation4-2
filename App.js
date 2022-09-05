import React from "react";
import { Button } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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
            title: '  Welcome',
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

export default MyStack;
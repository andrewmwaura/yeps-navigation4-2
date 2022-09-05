import React from "react";
import { StyleSheet, Text, View
		, SafeAreaView, Button, TextInput
		, FlatList  } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { AsyncStorage } from 'react-native';
// import { AsyncStorage } from '@react-native-async-storage/async-storage';

const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
  ];

const ViewPosts = ({ navigation, route }) => {
    const [XtempArr,setArrayItems] = React.useState([]);
    // const tempArrBlank = [];
    // if (tempArr == null)
    const tempArr = [];
    // tempArr.push([0,1]);
	const getAllArticles = async () =>{
        AsyncStorage.getAllKeys((err, keys) => {
            AsyncStorage.multiGet(keys, (err, stores) => {
              stores.map((result, i, store) => {
                // get at each store's key/value so you can work with it
                let item = [];
                item [0] = store[i][0];
                item [1] = store[i][1];
                tempArr.push (item);
                console.log ("item [0]");
              });
            });
            return tempArr;
          });
          //setArrayItems(tempArr)
    } 
    //getAllArticles ();
        return (
	<SafeAreaView style={styles.container}>
		<View>
    		<Text style={styles.fieldcaption}>All posts</Text>
			<FlatList
                data={getAllArticles} 
                renderItem={({ item }) => (
                    <View>
                        <Text>{item [0]}</Text>
                        <Text>{item [1]}</Text>
                    </View>
                    
                    )}
                
            />
		</View>
	</SafeAreaView>
	);
  };

  
const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  justifyContent: 'center',
	  marginHorizontal: 16,
	},
	input: {
		height: 40, margin: 12, borderWidth: 1, padding: 10,
	  },
	title: {
		fontSize: 30,
		marginBottom: 20,
	},
	button: { 
		alignItems: "center", backgroundColor: "#DDDDDD", padding: 10
	},	
	fieldcaption: {
		marginTop: 20, fontSize: 20, fontWeight: "bold"
	}
})
export default ViewPosts;

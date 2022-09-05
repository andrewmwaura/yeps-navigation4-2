import React from "react";
import { StyleSheet, Button, Text, View, SafeAreaView, FlatList  } from "react-native";
import { AsyncStorage } from 'react-native';

var MyContext = React.createContext();

const ViewPosts = ({ navigation, route }) => {
    const [xarr,setArrayItems] = React.useState([]);

    var [myData, setMyData] = React.useState(null);

    React.useEffect(() => {
        let tempArr = []; 
        AsyncStorage.getAllKeys((err, keys) => {
          AsyncStorage.multiGet(keys, (err, stores) => {
            stores.map((result, i, store) => {
              let item = [];
              item [0] = store[i][0];
              item [1] = store[i][1];
              tempArr.push (item);
            });
            setMyData (tempArr)
          });
      });
    }, []);
    

  return (
	<SafeAreaView style={styles.container}>
        <MyContext.Provider value={myData}>
		<View>
    		<Text style={styles.fieldcaption}>All posts</Text>
			<FlatList
                data={myData} 
                renderItem={({ item }) => (
                <View>
                    <View style={styles.onepost}>
                        <View style={styles.dataview}>
                            <Text style={styles.title}>{item [0]}</Text>
                            <Text style={styles.story}>{item [1]}</Text>
                        </View>
                        <View style={styles.buttonview}>
                            <Button title="Edit"
                                onPress={() => navigation.navigate('EditPost', { category: item [0], story: item[1] })}
                            />
                        </View>
                    </View>
                    <View>
                        <Text style={styles.separator}></Text>
                    </View>
                </View>
                 )}
            />
		</View>
        </MyContext.Provider>
	</SafeAreaView>
	);
  };
  
function Main() {
  const myData = React.useContext(MyContext);
  if (!myData) {
    return (<View><Text>Loading...</Text></View>);
  }
  return (
     <View><Text>{myData}</Text></View>
  );
}


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
export default ViewPosts;



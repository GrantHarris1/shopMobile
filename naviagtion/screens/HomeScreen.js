import * as React from 'react';
import { View, Text, StyleSheet, ImageBackground} from 'react-native';




export default function HomeScreen ({navigation}) {
    return(
       

    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
       <Text
        onPress={() => alert('This is the "Home" screen.')}
        style={{ fontSize: 26, fontWeight: 'bold'}}>  Home Screen</Text>
    </View>
  
    );
}

///const styles = StyleSheet.create({
  ///container: {
   // flex: 1,
 // },
  //image: {
   // flex: 1,
   // justifyContent: 'center'
//}});
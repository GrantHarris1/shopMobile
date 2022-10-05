import * as React from 'react';
import { View, Text, StyleSheet, Image, useWindowDimensions} from 'react-native';
import logo from "../../assets/images/logo.png";




export default function HomeScreen ({navigation}) {
  const { height } = useWindowDimensions();
    return(
       

    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
       <Image
        source={logo}
        style={[styles.logo, { height: height * 0.3 }]}
        resizeMode="contain"
      />
       <Text
        onPress={() => alert('This is the "Home" screen.')}
        style={{ fontSize: 26, fontWeight: 'bold'}}>  Home Screen</Text>
    </View>
  
    );
}

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
  },
  logo: {
    width: "70%",
    maxWidth: 500,
    height: "70%",
    maxHeight: 300,
  },
});
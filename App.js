
import { View, StyleSheet, SafeAreaView } from 'react-native';
import * as React from 'react';
import MainContainer from './naviagtion/MainConatiner';
import SignInScreen from './naviagtion/screens/SignInScreen';
import HomeScreen from './naviagtion/screens/HomeScreen';


export default function App() {
  return (
  
   <MainContainer />
  
  
  );
};


const styles = StyleSheet.create({
  root: {
    flex:1,
    backgroundColor: '#FFFFFF'
  }
})
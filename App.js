import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home'
import Mentorship from './screens/Mentorship'
import Employment from './screens/Employment'
import Resources from './screens/Resources'
import Profile from './screens/Profile'

//Comment for git tutorial

const Drawer = createDrawerNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home}/>
        <Drawer.Screen name="Mentorship" component={Mentorship}/>
        <Drawer.Screen name="Employment" component={Employment}/>
        <Drawer.Screen name="Resources" component={Resources}/>
        <Drawer.Screen name="Profile" component={Profile}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

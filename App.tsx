/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer, NavigationProp } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import Login from './Navigation/Login';
import Home from './Navigation/Home';
import Forgetpassword from './Navigation/Forgetpassword';
import Commentdetail from './Navigation/Commentdetail';
import DrawerNavigation from './Drawer/DrawerNavigation';
// Email.js

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Login" component={() => {
          const navigation = useNavigation();
          return <Login navigation={navigation as NavigationProp<any>} />;
        }} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Forgetpassword" component={Forgetpassword} options={{ headerShown: false }} />
        <Stack.Screen name="Commentdetail" component={Commentdetail} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
    </GestureHandlerRootView>
  
  );
};
export default App;

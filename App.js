import * as React from 'react';
import {Button, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AboutScreen from './AboutScreen';
import AppScreen from './AppScreen';

// setting up homescreen
function HomeScreen({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '7em',
      }}>
      <Text>Welcome to my app!</Text>
      <Button title="Go Next!" onPress={() => navigation.navigate('About')} />
    </View>
  );
}

//for all windows
function ContactsScreen({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Contact screen</Text>
      <Button title="View All" onPress={() => navigation.navigate('About')} />
    </View>
  );
}

// homescreen setup
const HomeStack = createNativeStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home-Screen" component={HomeScreen} />
      <HomeStack.Screen name="About" component={AboutScreen} />
      <HomeStack.Screen name="App" component={AppScreen} />
    </HomeStack.Navigator>
  );
}
// windows setup
const ContactsStack = createNativeStackNavigator();
function ContactsStackScreen() {
  return (
    <ContactsStack.Navigator>
      <ContactsStack.Screen name="Contact" component={ContactsScreen} />
      <ContactsStack.Screen name="Details" component={AboutScreen} />
      <HomeStack.Screen name="App" component={AppScreen} />
    </ContactsStack.Navigator>
  );
}

// exporting all data
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Contact" component={ContactsStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

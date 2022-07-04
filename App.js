import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import HomePage from './source/HomePage';
import SettingsPage from './source/SettingsPage';
import FontsSettingsPage from './source/FontsSettingsPage';
import ColorsSettingsPage from './source/ColorsSettingsPage';

const Tabs = createBottomTabNavigator();

function RenderTitle(props) {
    return <Text style={props.customStyle}>{props.text}</Text>;
}

function RenderRow(props) {
  return <Text style={props.customStyle}>{props.text}</Text>;
}

function RenderList(props) {
  return (

    <>
      <Text>
        {props.title}
      </Text>

      {props.names.map(function (name) {
          
          return <RenderRow key={name} text={name} customStyle={{  }}/>
        
      })}

    </>
        
  )
}

export default function App() {
  return (
    <NavigationContainer>

        <Tabs.Navigator
          tabBarOptions={{ 
            activeTintColor: 'blue',
            inactiveTintColor: 'black',
           }}
        >

         <Tabs.Screen name= "Início" component={HomePage} />
         <Tabs.Screen name= "Configurações" component={SettingsPage} />
         

        </Tabs.Navigator> 

    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  titleContainer: {
    width: '100%',
    height: 80,
    backgroundColor: '#6FCF97',

    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  text:{
    fontSize: 16,
    marginLeft: 10,
  }
});

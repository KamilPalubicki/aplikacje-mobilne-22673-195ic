import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Home from './components/home';
import ScrollView2 from './components/scroll_view_2';
import ScrollView1 from './components/scroll_view1';
import TouchableScreen from './components/touchable';
import SwipeScreen from "./components/swipe";

const Stack = createStackNavigator();

function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen options={{
            title: 'Home',
            headerStyle: {
              backgroundColor: '#ddd',
            },
            headerTintColor: '#444',
            headerTitleStyle: {
              fontSize: 30,
            },
            cardStyle: {
              backgroundColor: '#444',
            }
          }} name="Home" component={Home} />
          <Stack.Screen options={{
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerTintColor: '#333',
            headerTitleStyle: {
              fontSize: 15,
            },
          }} name="ScrollView2" component={ScrollView2} />
          <Stack.Screen options={{
            title: 'ScrollView1',
            headerStyle: {
              backgroundColor: '#eee',
            },
            headerTintColor: '#666',
            headerTitleStyle: {
              fontSize: 40,
            },
          }} name="ScrollView1" component={ScrollView1} />
          <Stack.Screen options={{
            title: 'TouchableScreen',
            headerStyle: {
              backgroundColor: '#ddd',
            },
            headerTintColor: '#444',
            headerTitleStyle: {
              fontSize: 35,
            },
            cardStyle: {
              backgroundColor: '#444',
            }
          }} name="TouchableScreen" component={TouchableScreen} />
          <Stack.Screen options={{
            title: 'Swipeable Screen',
            headerStyle: {
              backgroundColor: '#ddd',
            },
            headerTintColor: '#444',
            headerTitleStyle: {
              fontSize: 35,
            },
            cardStyle: {
              backgroundColor: '#444',
            }
          }} name="SwipeScreen" component={SwipeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;
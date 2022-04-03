import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Home from './components/home';
import RestParameters from './components/rest_parameters';
import SpreadOperator from './components/spread_operator';
import HookUseState from './components/hook';

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
          }} name="RestParameters" component={RestParameters} />
          <Stack.Screen options={{
              headerStyle: {
                  backgroundColor: '#eee',
              },
              headerTintColor: '#666',
              headerTitleStyle: {
                  fontSize: 40,
              },
          }} name="SpreadOperator" component={SpreadOperator} />
          <Stack.Screen options={{
              title: 'HookUseState',
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
          }} name="HookUseState" component={HookUseState} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Home from './components/home';
import LazyLoading from './components/lazy_loading';
import SortFilter from './components/sort_filter';
import StepProgress from './components/step_progress';

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
          }} name="LazyLoading" component={LazyLoading} />
          <Stack.Screen options={{
            title: 'SortFilter',
            headerStyle: {
              backgroundColor: '#eee',
            },
            headerTintColor: '#666',
            headerTitleStyle: {
              fontSize: 40,
            },
          }} name="SortFilter" component={SortFilter} />
          <Stack.Screen options={{
            title: 'StepProgress',
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
          }} name="StepProgress" component={StepProgress} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;
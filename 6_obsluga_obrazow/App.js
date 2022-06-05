import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Home from './components/home';
import Slider from './components/slider';
import LazyLoading from './components/lazy_loading';
import ConnectionCheck from "./components/connection_check";
import AsyncStorageComponent from "./components/async_storage_component";
import SyncData from "./components/sync_data"

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
          }} name="Slider" component={Slider} />
          <Stack.Screen options={{
            title: 'LazyLoading',
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
          }} name="LazyLoading" component={LazyLoading} />
          <Stack.Screen options={{
            title: 'ConnectionCheck',
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
          }} name="ConnectionCheck" component={ConnectionCheck} />
          <Stack.Screen options={{
            title: 'AsyncStorageComponent',
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
          }} name="AsyncStorageComponent" component={AsyncStorageComponent} />
          <Stack.Screen options={{
            title: 'SyncData',
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
          }} name="SyncData" component={SyncData} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
export default App;
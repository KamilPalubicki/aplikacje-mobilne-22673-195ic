import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Home from './components/home';
import SelectPicker from './components/select_picker';
import Text_Input from './components/text_input';
import SwitchScreen from './components/switch';
import DatePicker from './components/date_picker';
import ActiveToast from "./components/active_toast";

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
          }} name="SelectPicker" component={SelectPicker} />
          <Stack.Screen options={{
            title: 'TextInput',
            headerStyle: {
              backgroundColor: '#eee',
            },
            headerTintColor: '#666',
            headerTitleStyle: {
              fontSize: 40,
            },
          }} name="TextInput" component={Text_Input} />
          <Stack.Screen options={{
            title: 'Switch',
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
          }} name="Switch" component={SwitchScreen} />
          <Stack.Screen options={{
            title: 'DatePicker',
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
          }} name="DatePicker" component={DatePicker} />
          <Stack.Screen options={{
            title: 'ActiveToast',
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
          }} name="ActiveToast" component={ActiveToast} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;
import * as React from 'react';
import { View, Text, Button, TouchableOpacity  } from 'react-native';
import styles from './styles'
import TouchableScreen from "./touchable";
import SwipeScreen from "./swipe";

export default function Home({navigation}) {
    return (
        <View style={styles.home.Container}>
            <TouchableOpacity style={styles.home.Button}  onPress={() => navigation.navigate('ScrollView1')} >
                <Text style={styles.home.Text}>Scroll View 1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.home.Button}   onPress={() => navigation.navigate('ScrollView2')} >
                <Text style={styles.home.Text}>Scroll View 2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.home.Button} onPress={() => navigation.navigate('TouchableScreen')} >
                <Text style={styles.home.Text}>TouchableScreen</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.home.Button} onPress={() => navigation.navigate('SwipeScreen')} >
                <Text style={styles.home.Text}>Swipe</Text>
            </TouchableOpacity>
        </View>
    );
}
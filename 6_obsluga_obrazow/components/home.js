import * as React from 'react';
import { View, Text, Button, TouchableOpacity  } from 'react-native';
import styles from './styles'
import LazyLoading from "./lazy_loading";
import ConnectionCheck from "./connection_check";
import AsyncStorageComponent from "./async_storage_component";
import SyncData from "./sync_data"

export default function Home({navigation}) {
    return (
        <View style={styles.home.Container}>
            <TouchableOpacity style={styles.home.Button}   onPress={() => navigation.navigate('Slider')} >
                <Text style={styles.home.Text}>Slider</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.home.Button} onPress={() => navigation.navigate('LazyLoading')} >
                <Text style={styles.home.Text}>LazyLoading</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.home.Button} onPress={() => navigation.navigate('ConnectionCheck')} >
                <Text style={styles.home.Text}>ConnectionCheck</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.home.Button} onPress={() => navigation.navigate('AsyncStorageComponent')} >
                <Text style={styles.home.Text}>Async Storage Component</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.home.Button} onPress={() => navigation.navigate('SyncData')} >
                <Text style={styles.home.Text}>SyncData</Text>
            </TouchableOpacity>
        </View>
    );
}
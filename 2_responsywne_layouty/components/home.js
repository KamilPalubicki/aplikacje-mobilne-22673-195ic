import * as React from 'react';
import { View, Text, Button, TouchableOpacity  } from 'react-native';
import styles from '../components/styles';

export default function Home({navigation}) {
    return (
        <View style={styles.home.Container}>
            <TouchableOpacity style={styles.home.Button}  onPress={() => navigation.navigate('SpreadOperator')} >
                <Text style={styles.home.Text}>Spread Operator</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.home.Button}   onPress={() => navigation.navigate('RestParameters')} >
                <Text style={styles.home.Text}>Rest Parameters</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.home.Button} onPress={() => navigation.navigate('HookUseState')} >
                <Text style={styles.home.Text}>Hook Use State</Text>
            </TouchableOpacity>
        </View>
    );
}
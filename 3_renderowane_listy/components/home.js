import * as React from 'react';
import { View, Text, Button, TouchableOpacity  } from 'react-native';
import styles from './styles'

export default function Home({navigation}) {
    return (
        <View style={styles.home.Container}>
            <TouchableOpacity style={styles.home.Button}  onPress={() => navigation.navigate('SortFilter')} >
                <Text style={styles.home.Text}>Sort Filter</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.home.Button}   onPress={() => navigation.navigate('LazyLoading')} >
                <Text style={styles.home.Text}>Lazy Loading</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.home.Button} onPress={() => navigation.navigate('StepProgress')} >
                <Text style={styles.home.Text}>Step progress</Text>
            </TouchableOpacity>
        </View>
    );
}
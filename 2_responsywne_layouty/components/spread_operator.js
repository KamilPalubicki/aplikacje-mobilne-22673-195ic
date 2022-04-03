import * as React from 'react';
import { View, Text, Button, TouchableOpacity  } from 'react-native';
import styles from '../components/styles';

export default function SpreadOperator({navigation}) {
    return (
        <View style = {styles.spreadOperator.Container}>
            <Text style = {styles.spreadOperator.Text}>Spread syntax to zapis, który umożliwia rozbijanie iterowanej wartości na składowe. Elementy do kórych może być użyć to string,tablice,kolekcje,obiekty i nawet sam obiekt.
                Kilka zastosowań:
            </Text>
            <View style = {styles.spreadOperator.Ex}>
                <Text style = {styles.spreadOperator.TextEx}>{
                    `//rozbijanie tablicy na poszczególne liczby
const tab = [1, 2, 3];
console.log(...tab); //1, 2, 3

//kopiowanie tablicy
const tab2 = [...tab];

//łączenie tablic
const tabPart = [3, 4]
const tabFull = [1, 2, ...tabPart, 5]; //1, 2, 3, 4, 5

//rozdzielanie tekstu na poszczególne litery
const str = "Ala ma kota";
const tab = [...str]; //["A", "l", "a", " ", "m", "a", " ", "k", "o", "t", "a"]

//Można też stosować do Math.max która wymaga parametrów po przecinku
const tab = [1, 2, 3, 5, 4];
Math.max(...tab); //5`
                }</Text>
            </View>
            <View  style={styles.spreadOperator.Buttons}>
                <TouchableOpacity style={styles.spreadOperator.Button} onPress={() => navigation.navigate('HookUseState')} >
                    <Text>Hook Use State</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.spreadOperator.Button} onPress={() => navigation.navigate('RestParameters')} >
                    <Text>Rest Parameters</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
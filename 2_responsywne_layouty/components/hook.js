import * as React from 'react';
import { View, Text, Button, TouchableOpacity  } from 'react-native';
import styles from '../components/styles';

export default function HookUseState({navigation}) {
    return (
        <View style = {styles.hookUseState.Container}>
            <Text style = {styles.hookUseState.Text}>UseState Hook. Hooki są nowym dodatkiem w Reakcie 16.8. Pozwalają one na wykorzystanie stanu i innych funkcjonalności Reacta, bez użycia klas. Hook jest specjalną funkcją, która pozwala „zahaczyć się” w wewnętrzne mechanizmy Reacta. Na przykład useState jest hookiem, który pozwala korzystać ze stanu w komponencie funkcyjnym.</Text>
            <View style={styles.hookUseState.Buttons}>
                <TouchableOpacity style={styles.hookUseState.Button}  onPress={() => navigation.navigate('RestParameters')} >
                    <Text>Rest Parameters</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.hookUseState.Button} onPress={() => navigation.navigate('SpreadOperator')} >
                    <Text>Spread Operator</Text>
                </TouchableOpacity>
            </View>
        </View>

    );
}
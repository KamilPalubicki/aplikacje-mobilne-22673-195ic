import React, {Component} from 'react';
import {  ScrollView, Text, TextInput, View  } from 'react-native';
import styles from './styles'


export default class Text_Input extends Component{
    render(){
        return (
            <View>
                <ScrollView >
                    <View style={styles.sortFilter.Container}>
                        <Text style={styles.sortFilter.text}>Podstawowy TextInput</Text>
                        <TextInput style={styles.sortFilter.input} /><Text/>
                    </View>
                    <View style={styles.sortFilter.Container}>
                        <Text style={styles.sortFilter.text}>TextInput z automatycznym formatowaniem autoCapitalize="words"</Text>
                        <TextInput style={styles.sortFilter.input} autoCapitalize="words" />
                    </View>
                    <View style={styles.sortFilter.Container}>
                        <Text >TextInput z ustawionym value W momencie kiedy ustawiona jest wartość value tekstu nie można edytować</Text>
                        <TextInput style={styles.sortFilter.input} value="Przykładowy tekst" />
                    </View>
                    <View style={styles.sortFilter.Container}>
                        <Text style={styles.sortFilter.text}>TextInput z wartością domyślną defaultValue="Default Value" tą wartość można edytować</Text>
                        <TextInput style={styles.sortFilter.input} defaultValue="Default Value" />
                    </View>
                    <View style={styles.sortFilter.Container}>
                        <Text style={styles.sortFilter.text}>TextInput z wyłączoną możliwością edycji</Text>
                        <TextInput style={styles.sortFilter.input} editable={false} value="Zablokowany tekst" />
                    </View>
                    <View style={styles.sortFilter.Container}>
                        <Text style={styles.sortFilter.text}>TextInput uruchamiający klawiaturę numeryczną keyboardType="numeric"</Text>
                        <TextInput style={styles.sortFilter.input} keyboardType="numeric" />
                    </View>

                    <View style={styles.sortFilter.Container}>
                        <Text style={styles.sortFilter.text}>TextInput z wieloma liniami multiline=true ustalamy ilość lini na 5 numberOfLines=5</Text>
                        <TextInput style={styles.sortFilter.input} multiline={true} numberOfLines={5}/>
                    </View>
                    <View style={styles.sortFilter.Container}>
                        <Text style={styles.sortFilter.text}>TextInput z przykładową metodą wyswietlającą alert</Text>
                        <TextInput style={styles.sortFilter.input} onEndEditing={event =>{alert(event.nativeEvent.text)}} />
                    </View>
                </ScrollView>
            </View>
        )
    };
}
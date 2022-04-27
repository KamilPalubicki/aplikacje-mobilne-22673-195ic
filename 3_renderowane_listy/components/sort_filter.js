import React, {Component} from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { View, Text, TouchableOpacity  } from 'react-native';
import styles from './styles'

const Numbers = ({ liczby }) => {
    var index = 0
    return (
        <ScrollView >
            {liczby.map(liczba => <Text key={index++} >{liczba}</Text>)}
        </ScrollView>
    );
};

export default class SortFilter extends Component{
    constructor(){
        super();
        const arr = [];
        const sorted = false;
        for (let i = 0; i < 100; i++) {
            arr.push(Math.floor(Math.random() * 1000) + 1);
        }
        this.state = {
            arr
        };
    }
    sort = () =>{
        if(!this.state.sorted){
            this.state.arr.sort((a,b) => a > b ? 1:-1)
            this.state.sorted = true
        }
        else {
            this.state.arr.sort((a,b) => a > b ? -1:1)
            this.state.sorted = false
        }
        this.forceUpdate()
    }
    generate_numbers = () =>{
        const newarr = []
        for (let i = 0; i < this.state.arr.length; i++) {
            newarr.push(Math.floor(Math.random() * 1000) + 1);
        }
        this.state.arr = newarr
        this.state.sorted = false
        this.forceUpdate()
    }

    render(){
        return (
            <View style={styles.sortFilter.Container}>
                    <View >
                        <Text style={styles.sortFilter.Text}>Sortowanie losowo wygenerowanych liczb z zakresu (0, 1000)</Text>
                    </View>
                    <View style={styles.sortFilter.Buttons}>
                        <TouchableOpacity style={styles.sortFilter.Button}  onPress={this.sort}>
                            <Text >Sortuj</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.sortFilter.Button} onPress={this.generate_numbers}>
                            <Text >Generuj Liczby</Text>
                        </TouchableOpacity>
                    </View>
                <View style={styles.sortFilter.TextEx} >
                    <Numbers  liczby={this.state.arr} />
                </View>
            </View>
        )
    };
}
import React, {Component} from 'react';
import { Button, ScrollView, Text,TextInput, View, Switch } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import NumericInput from 'react-native-numeric-input'
import styles from './styles'


export default class SyncData extends Component {
    sliderValue = async (value) => {
        var key = "localValue"
        try {
            await AsyncStorage.setItem(key,value.toString());
        } catch (error) {
            console.error(error)
        }
        try {
            const tempValue = await AsyncStorage.getItem(key);
            if (tempValue !== null) {
                this.setState({localValue:tempValue})
            }else{
                this.setState({localValue:'n/a'})
            }
        } catch (error) {
            this.setState({localValue:error})
        }
    }
    state = {
        internetConnection: true,
        localValue:'',
        remoteValue:'',
    }
    checkData = () =>{
        if(this.state.internetConnection){
            this.setState({remoteValue:this.state.localValue})
        }else{

        }
    }
    componentDidMount(){
        setInterval(this.checkData, 1000)
    }
    render(){
        return (
            <View style={styles.content.container}>
                <ScrollView >
                    <View style={styles.content.example}>
                        <Text >{this.state.internetConnection?`Połączono z internetem `:`Brak połączenia z internetem`}</Text>
                        <Switch value={this.state.internetConnection} onValueChange={val =>{this.setState({ internetConnection: val})}}/>
                    </View>
                    <View style={styles.content.example}>
                        <View >
                            <Text style={styles.home.text}>Zmiana danych </Text>
                            <View style={{alignItems: 'center', marginTop: 10,}}>
                                <NumericInput
                                    onChange={this.sliderValue}
                                    onLimitReached={(isMax,msg) => console.log(isMax,msg)}
                                    totalWidth={240}
                                    totalHeight={50}
                                    iconSize={25}
                                    valueType='real'
                                    rounded
                                    textColor='#000'
                                    borderColor= '#666'
                                    iconStyle={{ color: 'white' }}
                                    rightButtonBackgroundColor='#4f4'
                                    leftButtonBackgroundColor='#0d0'/>
                            </View>
                        </View>
                    </View>
                    <View style={styles.content.example}>
                        <Text style={styles.home.text}>Podgląd </Text>
                        <View >
                            <View >
                                <Text >Dane lokalnie</Text>
                                <Text >{this.state.localValue}</Text>
                            </View>
                            <View >
                                <Text >Dane zdalne</Text>
                                <Text >{this.state.remoteValue}</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    };
}
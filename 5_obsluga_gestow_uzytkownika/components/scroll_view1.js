import React, {Component} from 'react';
import { ScrollView, Text, View, Dimensions  } from 'react-native';
import ScrollViewIndicator from 'react-native-scroll-indicator';
import styles from './styles'

const WindowHeight = Dimensions.get("window");

export default class ScrollView1 extends Component{
    render(){
        return (
            <View style={[styles.content.container, {height: WindowHeight.height}]}>
                <View style={[styles.content.example, {height: WindowHeight.height/1.5}]} >
                    <ScrollView >
                        <View style={[styles.flexbox.box, { backgroundColor: "steelblue" }]} >
                            <Text style={styles.home.text}>
                                RedBull
                            </Text>
                        </View>
                        <View style={[styles.flexbox.box, { backgroundColor: "red" }]}>
                            <Text style={styles.home.text}>
                                Ferrari
                            </Text>
                        </View>
                        <View style={[styles.flexbox.box, { backgroundColor: "darkorange" }]} >
                            <Text style={styles.home.text}>
                                Mclaren
                            </Text>
                        </View>
                        <View style={[styles.flexbox.box, { backgroundColor: "silver" }]} >
                            <Text style={styles.home.text}>
                                Mercedes
                            </Text>
                        </View>
                        <View style={[styles.flexbox.box, { backgroundColor: "white" }]} >
                            <Text style={styles.home.text}>
                                Haas
                            </Text>
                        </View>
                        <View style={[styles.flexbox.box, { backgroundColor: "darkblue" }]}>
                            <Text style={styles.home.text}>
                                Alphatauri
                            </Text>
                        </View>
                        <View style={[styles.flexbox.box, { backgroundColor: "pink" }]}>
                            <Text style={styles.home.text}>
                                Alpine
                            </Text>
                        </View>
                        <View style={[styles.flexbox.box, { backgroundColor: "green" }]}>
                            <Text style={styles.home.text}>
                                Aston Martin
                            </Text>
                        </View>
                        <View style={[styles.flexbox.box, { backgroundColor: "skyblue" }]}>
                            <Text style={styles.home.text}>
                                Williams
                            </Text>
                        </View>
                    </ScrollView>
                </View>
            </View >
        )
    };
}
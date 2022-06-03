import React, {Component} from 'react';
import { ScrollView, Text, View, Dimensions  } from 'react-native';
import ScrollViewIndicator from 'react-native-scroll-indicator';
import styles from './styles'

const WindowHeight = Dimensions.get("window");

export default class ScrollView2 extends Component{
    render(){
        return (
            <View style={[styles.content.example, {height: WindowHeight.height}]} >
                <ScrollViewIndicator style={styles.scrollViewIndicator} scrollViewStyle={styles.flexbox2.scrollViewStyle} scrollIndicatorContainerStyle={styles.flexbox2.scrollIndicatorContainerStyle} scrollIndicatorStyle={styles.flexbox2.scrollIndicatorStyle} >
                    <View style={[styles.flexbox2.box, { backgroundColor: "steelblue" }]} >
                        <Text style={styles.home.text}>
                            RedBull
                        </Text>
                    </View>
                    <View style={[styles.flexbox2.box, { backgroundColor: "red" }]}>
                        <Text style={styles.home.text}>
                            Ferrari
                        </Text>
                    </View>
                    <View style={[styles.flexbox2.box, { backgroundColor: "darkorange" }]} >
                        <Text style={styles.home.text}>
                            Mclaren
                        </Text>
                    </View>
                    <View style={[styles.flexbox2.box, { backgroundColor: "silver" }]} >
                        <Text style={styles.home.text}>
                            Mercedes
                        </Text>
                    </View>
                    <View style={[styles.flexbox2.box, { backgroundColor: "white" }]} >
                        <Text style={styles.home.text}>
                            Haas
                        </Text>
                    </View>
                    <View style={[styles.flexbox2.box, { backgroundColor: "darkblue" }]}>
                        <Text style={styles.home.text}>
                            Alphatauri
                        </Text>
                    </View>
                    <View style={[styles.flexbox2.box, { backgroundColor: "pink" }]}>
                        <Text style={styles.home.text}>
                            Alpine
                        </Text>
                    </View>
                    <View style={[styles.flexbox2.box, { backgroundColor: "green" }]}>
                        <Text style={styles.home.text}>
                            Aston Martin
                        </Text>
                    </View>
                    <View style={[styles.flexbox2.box, { backgroundColor: "skyblue" }]}>
                        <Text style={styles.home.text}>
                            Williams
                        </Text>
                    </View>
                </ScrollViewIndicator>
            </View>
        )
    };
}
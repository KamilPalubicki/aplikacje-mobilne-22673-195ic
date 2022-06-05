import React, {Component} from 'react';
import { ScrollView, Text, View, Dimensions, Image  } from 'react-native';
import styles from './styles'
import ScrollViewIndicator from 'react-native-scroll-indicator';

export default class Images extends Component {
    render(){
        return (
            <ScrollViewIndicator>
                <View style={styles.content.container}>
                    <View style={styles.content.example}>
                        <Text style={styles.home.text}>
                            Images
                        </Text>
                    </View>
                    <View style={styles.content.example} >
                        <Image style={{width: 200, height: 200}} source={require('../assets/logo.png')}  />
                    </View>
                    <View style={styles.content.example} >
                        <Image style={{width: 200, height: 200}} source={{uri: 'https://png.pngtree.com/png-clipart/20200224/original/pngtree-qr-code-vector-hidden-text-or-url-scanning-smartphone-technology-isolated-png-image_5204763.jpg',}}  />
                    </View>
                </View >
            </ScrollViewIndicator>
        )
    };
}
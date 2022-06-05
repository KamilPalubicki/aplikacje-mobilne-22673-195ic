import React, {Component} from 'react';
import { ScrollView, Text, View, Dimensions, Image  } from 'react-native';
import styles from './styles'
import Slider from '@react-native-community/slider';
import ScrollViewIndicator from 'react-native-scroll-indicator';

export default class SlideComponent extends Component {
    state = {
        imageScale: 0.5
    }
    imageResize = (value) => {
        this.setState({imageScale: value});
    }
    render(){
        return (
            <ScrollViewIndicator>
                <View style={styles.content.container}>
                    <View style={styles.content.example}>
                        <Text style={styles.home.text}>Obraz załadowany poprzez 'require' i zmiana rozmiaru</Text>
                    </View>
                    <ScrollView contentContainerStyle={[{flex:1,flexDirection: 'column'}]}>
                        <View style={styles.content.example}>
                            <Slider
                                style={{width: 275, height: 40}}
                                value={0.5}
                                minimumValue={0}
                                maximumValue={1}
                                thumbTintColor='#444'
                                minimumTrackTintColor="#444"
                                maximumTrackTintColor="#000000"
                                onValueChange={this.imageResize}
                            />
                            <Image source={require('../assets/favicon.png')} style={[{transform: [{ scale: this.state.imageScale }]}]}/>
                        </View>
                        <View style={styles.content.example}>
                            <Text style={styles.home.text}>Obraz załadowany poprzez 'uri'</Text>
                        </View>
                        <View style={styles.content.example} >
                            <Image style={{width: 200, height: 200}} source={{uri: 'https://png.pngtree.com/png-clipart/20200224/original/pngtree-qr-code-vector-hidden-text-or-url-scanning-smartphone-technology-isolated-png-image_5204763.jpg',}}  />
                        </View>
                    </ScrollView>
                </View>
            </ScrollViewIndicator>
        )
    };
}
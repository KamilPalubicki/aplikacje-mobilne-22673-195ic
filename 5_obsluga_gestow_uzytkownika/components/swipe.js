import React, {Component} from 'react';
import {ScrollView, Text, TouchableOpacity, View, TouchableHighlight} from 'react-native';
import Swipeable from 'react-native-swipeable';
import styles from './styles';


export default class SwipeScreen extends Component{
    state = {
        leftAction: false,
        toggle: false,
        leftAction2: false,
        toggle2: false
    };
    render() {
        const {leftAction, toggle} = this.state;
        const {leftAction2, toggle2} = this.state;
        const leftContent=[
            <View style={[styles.swipeScreen.leftSwipeItem,{backgroundColor: leftAction ? '#e00' : '#0e0'}]}>
                {leftAction ?
                    <Text>Puść!</Text> :
                    <Text>Przeciągaj dalej!</Text>}
            </View>
        ]
        const leftContent2=[
            <View style={[styles.swipeScreen2.listItem,{backgroundColor: leftAction2 ? '#e00' : '#0e0'}]}>
                {leftAction2 ?
                    <Text style={[styles.swipeScreen2.text]}>Drop!</Text> :
                    <Text style={[styles.swipeScreen2.text]}>Pull!</Text>}
            </View>
        ]

        const rightButtons = [
            <TouchableOpacity onPress={() => this.setState({toggle: !toggle})}><Text>Opcja 1</Text></TouchableOpacity>,
            <TouchableOpacity onPress={() => this.setState({toggle: !toggle})}><Text >Opcja 2</Text></TouchableOpacity>
        ];
        const rightButtons2 = [
            <TouchableOpacity onPress={() => this.setState({toggle2: !toggle2})}><Text>Edit</Text></TouchableOpacity>,
            <TouchableOpacity onPress={() => this.setState({toggle2: !toggle2})}><Text>Delete</Text></TouchableOpacity>
        ];
        return (
            <ScrollView>
                <ScrollView onScroll={this.handleScroll} >
                    <Swipeable leftActionActivationDistance={180} leftContent={leftContent} rightButtons={rightButtons} onLeftActionActivate={() => this.setState({leftAction: true})} onLeftActionDeactivate={() => this.setState({leftAction: false})} onLeftActionComplete={() => this.setState({toggle: !toggle})}>
                        <Text style={[{backgroundColor: toggle ? '#fff' : '#000', color: toggle ? '#000' : '#fff'}]}>My swipeable content</Text>
                    </Swipeable>
                    <Swipeable leftActionActivationDistance={270} leftContent={leftContent2} rightButtons={rightButtons2} onLeftActionActivate={() => this.setState({leftAction2: true})} onLeftActionDeactivate={() => this.setState({leftAction2: false})} onLeftActionComplete={() => this.setState({toggle2: !toggle2})}>
                        <Text style={[styles.swipeScreen2.listItem, {backgroundColor: toggle2 ? '#fff' : '#000', color: toggle2 ? '#000' : '#fff'}]}>2 swipe</Text>
                    </Swipeable>
                </ScrollView>
            </ScrollView>
        );
    }
}
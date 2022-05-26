import React ,{Component}  from 'react';
import { View, Text, Switch,Modal,StyleSheet ,Pressable } from 'react-native';
import styles from './styles'


export default class SwitchScreen extends Component {state = {
    modalVisible: false
};

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }

    render() {
        const { modalVisible } = this.state;
        return (
            <View style={styles.SwitchScr.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        this.setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.SwitchScr.centeredView}>
                        <View style={styles.SwitchScr.modalView}>
                            <Text style={styles.SwitchScr.modalText}>{Math.floor(Math.random()*100)}</Text>
                            <Pressable
                                style={styles.SwitchScr.button}
                                onPress={() => this.setModalVisible(!modalVisible)}
                            >
                                <Text style={styles.SwitchScr.textStyle}>Wróć</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
                <Text style={styles.SwitchScr.textStyle}>Losuj liczbę z przedziału 0-100</Text>
                <Switch value={modalVisible} onValueChange={() => this.setModalVisible(true)}/>
            </View>
        );
    }
}


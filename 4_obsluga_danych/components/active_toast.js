import React ,{Component , useEffect, useState}  from 'react';
import { View, Text, ScrollView,Button, Modal,ToastAndroid} from 'react-native';
import styles from './styles';

const Toast = ({ visible}) => {
    if (visible) {
        ToastAndroid.showWithGravityAndOffset(
            "Toast",
            ToastAndroid.LONG,
            ToastAndroid.CENTER,
            25,
            50
        );
    }
    return null;
};

const ToastButton = () => {
    const [visible, setvisible] = React.useState(false);
    const [switchOn, setswitchOn] = React.useState(false);
    const [time, setTime] = useState(0);

    useEffect(() => setvisible(false), [visible]);

    const handleButtonPress = () => {
        setvisible(true);
    };

    const onToggleSwitch = () => {
        setswitchOn(!switchOn);
    };


    var promise = null
    const createPromise = () => {
        let time = Math.floor(Math.random()*10000)
        setTime(time)
        promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('ukryj');
            }, time);
        });
    }

    return (
        <View style={styles.Toast.modalContainer}>
            <Toast visible={visible} />
            <Button title="Active Toast" onPress={() => {
                onToggleSwitch()
                handleButtonPress()
                createPromise()
                promise.then((value) => {
                    if(value == 'ukryj'){
                        setswitchOn(false)
                    }
                });
            }}/>
            <Modal
                animationType="fade"
                transparent={false}
                visible={switchOn}
                onRequestClose={() => {
                    setModalVisible(!switchOn);
                }}
            >
                <View >
                    <View >
                        <Text onPress={onToggleSwitch} style={styles.Toast.modalText}>Modal wyłączy się za:</Text>
                        <Text style={styles.Toast.modalText}>{time/1000} s</Text>
                    </View>
                </View>
            </Modal>
        </View>
    );
};


export default class ActiveToast extends Component {
    render(){
        return (
            <View style={styles.Toast.container}>
                <ScrollView >
                    <ToastButton/><Text/>
                    <Text style={[styles.Toast.text,{fontWeight: "bold",}]}>Kliknij, aby pojawił się ToastAndroid oraz modal z czasem zamknięcia</Text>
                </ScrollView>
            </View>

        );
    }
}
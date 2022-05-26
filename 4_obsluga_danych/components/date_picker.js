import React, {useState} from 'react';
import {View, Platform, Text, TouchableOpacity} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from './styles';


export default function DatePicker() {
    const [date, setDate] = useState(new Date("May 20, 2022 16:34:22"));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const B = (props) => <Text style={{fontWeight: 'bold',color:'black'}}>{props.children}</Text>

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
        alert(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

    return (
        <>
            <View style={styles.DatePicker.homeContainer}>
                <TouchableOpacity  onPress={showDatepicker}>
                    <Text style={styles.DatePicker.text}>
                        Select Date...
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity  onPress={showTimepicker}>
                    <Text style={styles.DatePicker.text}>
                        Select Time...
                    </Text>
                </TouchableOpacity>
            </View>
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                />
            )}
            <View style={styles.DatePicker.homeContainer}>
                <Text style={styles.DatePicker.text}>Date: {date.getDate()}/{date.getMonth()}/{date.getFullYear()}</Text>
                <Text style={styles.DatePicker.text}>Time: {date.getHours()}:{date.getMinutes()}</Text>
            </View>
        </>
    );
};
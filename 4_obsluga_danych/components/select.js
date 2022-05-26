import React from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";
import {Picker} from '@react-native-picker/picker';
import styles from './styles'
export default function Select(props) {
    return (
        <View>
            <Text style={styles.SelectPICK.pickerLabel}>{props.label}</Text>
            <Picker {...props}>
                {props.items.map(i => (
                    <Picker.Item key={i.label} {...i} />
                ))}
            </Picker>
        </View>
    );
}
Select.propTypes = {
    items: PropTypes.array,
};
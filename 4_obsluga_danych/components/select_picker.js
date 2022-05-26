import React ,{Component,useState}  from 'react';
import { View, Text, Button, TouchableOpacity  } from 'react-native';
import styles from './styles'
import Select from "./select";


export default function SelectPicker() {
    const [urzadzenia, setUrzadzenia] = useState([
        { label: "", value: "" },
        { label: "iPhone 12", value: "iPhone 12" },
        { label: "iPhone 13", value: "iPhone 13" },
        { label: "iPhone 14", value: "iPhone 14" },
    ]);
    const [dostepne, setDostepne] = useState([
        { label: "", value: null, urzadzenia: ["iPhone 12", "iPhone 13", "iPhone 14"] },
        { label: "Mini", value: 16, urzadzenia: ["iPhone 12"] },
        { label: "Max", value: 3, urzadzenia: ["iPhone 12"] },
        { label: "Pro Max", value: 2, urzadzenia: ["iPhone 12"] },
        { label: "Mini", value: 15, urzadzenia: ["iPhone 13"] },
        { label: "Pro Max", value: 1, urzadzenia: ["iPhone 13"] },
        { label: "Pro", value: 1, urzadzenia: ["iPhone 14"] }
    ]);
    const [availableDostepne, setAvailableDostepne] = useState([]);
    const [selectedUrzadzenie, setSelectedUrzadzenie] = useState(null);
    const [selectedDostepny, setSelectedDostepny] = useState(null);
    const [selection, setSelection] = useState("");
    return (
        <View style={styles.SelectPICK.container}>
            <View style={styles.SelectPICK.pickerContainer}>
                <View style={styles.SelectPICK.selectContainer}>
                    <Select
                        label="Telefony dostępne w ofercie:"
                        items={urzadzenia}
                        selectedValue={selectedUrzadzenie}
                        onValueChange={urzadzenie => {
                            setSelectedUrzadzenie(urzadzenie);
                            setSelectedDostepny(null);
                            setAvailableDostepne(dostepne.filter(i =>
                                i.urzadzenia.includes(urzadzenie)));
                        }}
                    />
                </View>
                <View style={styles.SelectPICK.selectContainer}>
                    <Select
                        label="Model"
                        items={availableDostepne}
                        selectedValue={selectedDostepny}
                        onValueChange={dostepny => {
                            setSelectedDostepny(dostepny);
                            setSelection(
                                ` Dostępnych ${dostepne.find(i => i.value ===
                                    dostepny).value} szt.`
                            );
                        }}
                    />
                </View>
                <View style={styles.SelectPICK.selectionContainer}>
                    <Text style={styles.SelectPICK.selection}>{selection}</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.SelectPICK.Button} >
                <Text style={styles.SelectPICK.selection}>Dodaj do koszyka</Text>
            </TouchableOpacity>
        </View>
    );
}